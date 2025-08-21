import argparse
import json
import pathlib
import re
import sys
import typing

import frontmatter
from jsonschema import SchemaError, ValidationError
from jsonschema.validators import validator_for
from referencing import Registry, Specification


# must have the same behaviour as `nameToUrl` in ui/build_standalone.js
def name_to_url(name: str) -> str:
    ALLOWED_CHARACTERS: set[str] = {"."}  # besides alphanumeric
    SPLIT_CHARACTERS: set[str] = {"_", "-", " "}
    REMOVE_CHARACTERS: set[str] = {"(", ")"}
    REPLACE_CHARACTERS: dict[str, str] = {
        "+": "p",
    }
    word_start = True
    result = ""
    for character in name:
        if character.isalnum() or character in ALLOWED_CHARACTERS:
            if character.isnumeric():
                result += character
                word_start = True
            elif character.isupper():
                if word_start:
                    result += character.lower()
                else:
                    result += f"-{character.lower()}"
                word_start = True
            else:
                result += character
                word_start = False
        elif character in REPLACE_CHARACTERS:
            result += REPLACE_CHARACTERS[character]
            word_start = False
        elif character in SPLIT_CHARACTERS:
            result += "-"
            word_start = True
        elif not character in REMOVE_CHARACTERS:
            raise Exception(f'unsupported character "{character}" in "{name}"')
    return result


class Formatter:
    """
    A formatter inspired by https://github.com/butler54/mdformat-frontmatter,
    but designed to format JSON data.
    """

    def __init__(self):
        import markdown_it
        import mdformat.plugins
        import mdformat.renderer
        import mdit_py_plugins.front_matter

        def render_frontmatter(
            node: mdformat.renderer.RenderTreeNode,
            context: mdformat.renderer.RenderContext,
        ) -> str:
            formatted_contents = node.content
            try:
                formatted_contents = json.dumps(json.loads(node.content), indent=4)
            except json.JSONDecodeError as error:
                mdformat.renderer.LOGGER.warning(
                    f"Invalid JSON in a front matter block: {error}."
                )
            return f"{node.markup}\n{formatted_contents}\n{node.markup}"

        class Extension(mdformat.plugins.ParserExtensionInterface):
            RENDERERS = {"front_matter": render_frontmatter}

            @staticmethod
            def update_mdit(mdit: markdown_it.MarkdownIt) -> None:
                mdit.use(mdit_py_plugins.front_matter.front_matter_plugin)

        mdformat.plugins.PARSER_EXTENSIONS = dict(
            mdformat.plugins.PARSER_EXTENSIONS
        ) | {"frontmatter": Extension}

    def file(self, path: pathlib.Path):
        import mdformat

        mdformat.file(
            path,
            extensions=["tables", "frontmatter"],
            options={
                "number": True,
            },
        )


def validate_dataset_entry(
    dataset_entry: dict,
    schemas_dir: pathlib.Path,
    schema: pathlib.Path,
    show_errors: bool,
) -> bool:
    assert schemas_dir.exists(), f"Schema directory {schemas_dir} does not exist."
    assert schema.exists(), f"Schema file {schema} does not exist."

    schemas = {
        file.name: json.load(open(str(file.resolve()), "r"))
        for file in schemas_dir.glob("*.json")
        if file.is_file() and file.name != schema.name
    }
    registry = Registry().with_resources(
        [
            (
                schema_data["$id"],
                Specification.detect(schema_data).create_resource(schema_data),
            )
            for schema_data in schemas.values()
        ]
    )
    current_schema = json.loads(schema.read_text())
    validator = validator_for(current_schema)(current_schema, registry=registry)

    try:
        validator.validate(dataset_entry)
        return True
    except ValidationError as e:
        if show_errors:
            print(f"Validation Error: {e.message}")
            print(f"Path: {e.path}")
            print(f"Validator: {e.validator} (Value: {e.validator_value})")
    except SchemaError as e:
        if show_errors:
            print(f"Schema Error: The provided schema is invalid: {e.message}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

    return False


def validate_dataset_file(
    target_path: pathlib.Path,
    schemas_dir: pathlib.Path,
    schema: pathlib.Path,
    quiet: bool,
    show_errors: bool,
    formatter: typing.Optional[Formatter],
    names: list[str],
) -> bool:
    if target_path.is_file():
        dataset_path = target_path.resolve()
        names.append(dataset_path.stem)
        dataset = frontmatter.load(
            str(dataset_path),
            handler=frontmatter.default_handlers.JSONHandler(
                fm_boundary=re.compile(r"^(?:-{3}\n\{|\}\r?\n-{3}\n)$", re.MULTILINE)
            ),
        )
        assert dataset, f"Failed to load dataset from {target_path}"
        success = validate_dataset_entry(
            dataset_entry=dataset.metadata,
            schemas_dir=schemas_dir,
            schema=schema,
            show_errors=show_errors,
        )
        if quiet:
            return success
        if success:
            if formatter is not None:
                formatter.file(target_path)
        else:
            print(
                f"\033[91m✘\033[0m {target_path.name} is invalid according to the schema."
            )
        return success

    elif target_path.is_dir():
        md_files = list(target_path.glob("*.md"))
        if len(md_files) == 0:
            print(
                f"No dataset files (with extension .md) found in directory {target_path}."
            )
            return True
        elif len(md_files) == 0:
            return True

        success = True
        valid_datasets = []
        invalid_datasets = []
        for md_file in md_files:
            dataset_success = validate_dataset_file(
                target_path=md_file,
                schemas_dir=schemas_dir,
                schema=schema,
                show_errors=show_errors,
                quiet=quiet,
                formatter=formatter,
                names=names,
            )
            success &= dataset_success
            if dataset_success:
                valid_datasets.append(md_file.stem)
            else:
                invalid_datasets.append(md_file.stem)
        if quiet:
            return success

        if len(valid_datasets) > 0:
            print("Valid datasets:")
            print(f"\n".join([f"\t\033[92m✔\033[0m {name}" for name in valid_datasets]))
        else:
            print("\033[91m✘\033[0m No valid datasets found according to the schema.")

        if len(invalid_datasets) > 0:
            print("Invalid datasets:")
            print(
                f"\n".join([f"\t\033[91m✘\033[0m {name}" for name in invalid_datasets])
            )
        else:
            print("\033[92m✔\033[0m All datasets are valid according to the schema.")

        return success
    else:
        raise FileNotFoundError(
            f"The target path {target_path} does not exist or is not a file."
        )


def parse_arguments():
    parser = argparse.ArgumentParser(
        description="Validate dataset files against a JSON schema."
    )
    parser.add_argument(
        "--target-path",
        type=str,
        default="datasets",
        help="Path to the dataset file or directory to validate.",
    )
    parser.add_argument(
        "--schemas-dir",
        type=str,
        default="schemas",
        help="Directory containing JSON schemas (default: 'schemas').",
    )
    parser.add_argument(
        "--schema",
        type=str,
        default="dataset.json",
        help="Name of the JSON schema file to validate against (default: 'dataset.json').",
    )
    parser.add_argument(
        "--quiet",
        action="store_true",
        help="Print only the validation result without additional output.",
    )
    parser.add_argument(
        "--no-errors",
        action="store_true",
        help="Hide schema errors.",
    )
    parser.add_argument(
        "--format",
        action="store_true",
        help="Format Markdown files with mdformat (only valid files are formatted).",
    )
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_arguments()

    schemas_dir = pathlib.Path(args.schemas_dir)
    schema = schemas_dir / args.schema
    target_path = pathlib.Path(args.target_path)

    assert schemas_dir.exists(), f"Schema directory {schemas_dir} does not exist."
    assert schema.exists(), f"Schema file {schema} does not exist."
    assert target_path.exists(), f"Target path {target_path} does not exist."

    names: list[str] = []
    success = validate_dataset_file(
        target_path=target_path,
        schemas_dir=schemas_dir,
        schema=schema,
        quiet=args.quiet,
        show_errors=not args.no_errors,
        formatter=Formatter() if args.format else None,
        names=names,
    )
    if not success:
        sys.exit(1)

    url_to_name: dict[str, str] = {}
    for name in names:
        url = name_to_url(name)
        if url in url_to_name:
            print(
                f'\033[91m✘\033[0m "{name}" and "{url_to_name[url]}" have the same URL ({url}).'
            )
            sys.exit(1)
        url_to_name[url] = name
