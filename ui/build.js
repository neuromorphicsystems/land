import * as esbuild from "esbuild";
import * as fs from "fs";
import matter from "gray-matter";
import markdownit from "markdown-it";
import mustache from "mustache";
import * as path from "path";
import { fileURLToPath } from "url";
import * as process from "node:process";
import sveltePlugin from "esbuild-svelte";

fs.mkdirSync("build", { recursive: true });

const datasets = [];
const datasetsDirectory = path.join(
    path.dirname(path.dirname(fileURLToPath(import.meta.url))),
    "datasets",
);
const renderer = markdownit();
for (const name of fs.readdirSync(datasetsDirectory).sort()) {
    if (name.endsWith(".md")) {
        try {
            const dataset = matter(
                fs.readFileSync(path.join(datasetsDirectory, name)),
            );
            datasets.push({
                data: dataset.data,
                html: renderer.render(dataset.content),
            });
        } catch (error) {
            console.error(`\x1b[31m✘\x1b[0m Parsing ${name} failed: ${error}`);
        }
    }
}

console.log("Initialize esbuild");
const context = await esbuild.context({
    entryPoints: [
        { in: path.join("src", "main.ts"), out: "main" },
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
        "process.env.DATASETS": JSON.stringify(datasets),
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
                            path.join("build", "index.html"),
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
