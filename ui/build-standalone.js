import * as esbuild from "esbuild";
import * as fs from "fs";
import matter from "gray-matter";
import markdownit from "markdown-it";
import mustache from "mustache";
import * as path from "path";
import { fileURLToPath } from "url";
import * as process from "node:process";
import sveltePlugin from "esbuild-svelte";

// must have the same behaviour as `name_to_url` in check.py
const nameToUrl = name => {
    const ALLOWED_CHARACTERS = /[a-zA-Z0-9\.]/;
    const SPLIT_CHARACTERS = /[_\- ]/;
    const REMOVE_CHARACTERS = /[\(\)]/;
    const REPLACE_CHARACTERS = {
        "+": "p",
    };
    let wordStart = true;
    let result = "";
    for (const character of name) {
        if (ALLOWED_CHARACTERS.test(character)) {
            if (/[0-9]/.test(character)) {
                result += character;
                wordStart = true;
            } else if (/[A-Z]/.test(character)) {
                if (wordStart) {
                    result += character.toLowerCase();
                } else {
                    result += `-${character.toLowerCase()}`;
                }
                wordStart = true;
            } else {
                result += character;
                wordStart = false;
            }
        } else if (character in REPLACE_CHARACTERS) {
            result += REPLACE_CHARACTERS[character];
            wordStart = false;
        } else if (SPLIT_CHARACTERS.test(character)) {
            result += "-";
            wordStart = true;
        } else if (!REMOVE_CHARACTERS.test(character)) {
            throw new Error(
                `unsupported character "${character}" in "${name}"`,
            );
        }
    }
    return result;
};

fs.mkdirSync("build", { recursive: true });

const renderer = markdownit();
const dataset = {
    data: null,
    html: null,
};

if (process.argv.length !== 3 && process.argv.length !== 4) {
    console.error(
        `\x1b[31m✘\x1b[0m Syntax: node build-standalone.js dataset [--watch] (for example \`node build-standalone.js "ATIS Planes Dataset"\`)`,
    );
    process.exit(1);
}
const datasetsDirectory = path.join(
    path.dirname(path.dirname(fileURLToPath(import.meta.url))),
    "datasets",
);
let name;
if (
    process.argv.length === 3 ||
    (process.argv.length === 4 && process.argv[2] === "--watch")
) {
    name = process.argv[2];
} else {
    name = process.argv[3];
}
const mdPath = path.join(datasetsDirectory, `${name}.md`);
if (!fs.existsSync(mdPath)) {
    console.error(`\x1b[31m✘\x1b[0m The file \"${mdPath}\" does not exist`);
    process.exit(1);
}
try {
    const matterDataset = matter(fs.readFileSync(mdPath));
    dataset.data = matterDataset.data;
    dataset.html = renderer.render(matterDataset.content);
} catch (error) {
    console.error(`\x1b[31m✘\x1b[0m Parsing ${name} failed: ${error}`);
    process.exit(1);
}

console.log("Initialize esbuild");
const context = await esbuild.context({
    entryPoints: [
        { in: path.join("src", "mainStandalone.ts"), out: "main" },
        { in: path.join("src", "styles.css"), out: "styles" },
    ],
    mainFields: ["svelte", "browser", "module", "main"],
    conditions: ["svelte", "browser"],
    outdir: "build",
    bundle: true,
    loader: { ".ttf": "dataurl" },
    target: ["es2022"],
    format: "esm",
    write: false,
    minify: process.env.MODE === "production",
    define: {
        "process.env.DATASET": JSON.stringify(dataset),
    },
    plugins: [
        sveltePlugin({
            compilerOptions: { css: "injected", runes: true },
        }),
        {
            name: "bundle",
            setup(build) {
                build.onEnd(result => {
                    if (result.errors.length === 0) {
                        fs.writeFileSync(
                            path.join("build", `${nameToUrl(name)}.html`),
                            mustache.render(
                                fs
                                    .readFileSync(
                                        path.join("src", "index.mustache"),
                                    )
                                    .toString(),
                                {
                                    title: "LAND",
                                    script: result.outputFiles[0].text,
                                    styles: result.outputFiles[1].text,
                                },
                            ),
                        );
                        if (process.argv.includes("--watch")) {
                            console.log(
                                `\x1b[32m✓\x1b[0m ${new Date().toLocaleString()}`,
                            );
                        }
                    }
                });
            },
        },
    ],
});

if (process.argv.includes("--watch")) {
    await context.watch();
} else {
    await context.rebuild();
    await context.dispose();
}
