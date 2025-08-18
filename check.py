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
) -> bool:
    if target_path.is_file():
        dataset = frontmatter.load(
            str(target_path.resolve()),
            handler=frontmatter.default_handlers.JSONHandler(
                fm_boundary=re.compile(r"^(?:-{3}\n\{|\}\r?\n-{3}\n)$", re.MULTILINE)
            ),
        )
        assert dataset, f"Failed to load dataset from {target_path}"
        result = validate_dataset_entry(
            dataset_entry=dataset.metadata,
            schemas_dir=schemas_dir,
            schema=schema,
            show_errors=show_errors,
        )
        if quiet:
            return result

        if result:
            # print(
            #     f"\033[92m✔\033[0m {target_path.name} is valid according to the schema."
            # )
            if formatter is not None:
                formatter.file(target_path)
        else:
            print(
                f"\033[91m✘\033[0m {target_path.name} is invalid according to the schema."
            )
        return result

    elif target_path.is_dir():
        md_files = list(target_path.glob("*.md"))
        if len(md_files) == 0:
            print(
                f"No dataset files (with extension .md) found in directory {target_path}."
            )
            return True
        elif len(md_files) == 0:
            return True

        results = []
        for md_file in md_files:
            result = validate_dataset_file(
                target_path=md_file,
                schemas_dir=schemas_dir,
                schema=schema,
                show_errors=show_errors,
                quiet=quiet,
                formatter=formatter,
            )
            results.append((md_file.name, result))
        if quiet:
            return all(result[1] for result in results)

        valid_datasets = [file_name for file_name, is_valid in results if is_valid]
        if len(valid_datasets) > 0:

            print("Valid datasets:")
            print(
                f"\n".join(
                    [f"\t\033[92m✔\033[0m {file_name}" for file_name in valid_datasets]
                )
            )
        else:
            print("\033[91m✘\033[0m No valid datasets found according to the schema.")

        invalid_datasets = [
            file_name for file_name, is_valid in results if not is_valid
        ]
        if len(invalid_datasets) > 0:
            print("Invalid datasets:")
            print(
                f"\n".join(
                    [
                        f"\t\033[91m✘\033[0m {file_name}"
                        for file_name in invalid_datasets
                    ]
                )
            )
        else:
            print("\033[92m✔\033[0m All datasets are valid according to the schema.")

        return all(result[1] for result in results)
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

    result = validate_dataset_file(
        target_path=target_path,
        schemas_dir=schemas_dir,
        schema=schema,
        quiet=args.quiet,
        show_errors=not args.no_errors,
        formatter=Formatter() if args.format else None,
    )
    if args.quiet:
        print(result)

    sys.exit(0 if result else 1)
