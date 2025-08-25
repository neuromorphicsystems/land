import * as fs from "fs";
import * as path from "path";
import * as process from "node:process";
import * as zlib from "node:zlib";

import * as esbuild from "esbuild";
import mustache from "mustache";
import sveltePlugin from "esbuild-svelte";

import { loadDatasets, generateKeyToNameToColor } from "./data.js";

fs.mkdirSync("build", { recursive: true });

const datasets = loadDatasets();
const keyToNameToColor = generateKeyToNameToColor(datasets);

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
    loader: { ".ttf": "dataurl", ".woff2": "dataurl" },
    target: ["es2022"],
    format: "esm",
    write: false,
    minify: process.env.MODE === "production",
    define: {
        "process.env.DATA": `"${Buffer.from(
            zlib.deflateRawSync(
                JSON.stringify({
                    datasets,
                    keyToNameToColor,
                }),
                {
                    level: 9,
                    memLevel: 9,
                    windowBits: 15,
                },
            ),
        ).toString("base64")}"`,
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
