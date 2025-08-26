import * as fs from "node:fs";
import * as path from "node:path";
import * as process from "node:process";
import * as zlib from "node:zlib";

import * as commander from "commander";
import * as esbuild from "esbuild";
import mustache from "mustache";
import sveltePlugin from "esbuild-svelte";

import { loadDatasets, generateKeyToNameToColor } from "./data.js";

const command = new commander.Command("build.js").option(
    "--watch",
    "Rebuild the app when a file changes",
);
command.parse();
const options = command.opts();

fs.mkdirSync("build", { recursive: true });

const [datasets, _] = loadDatasets();
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
    loader: { ".woff2": "dataurl" },
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
            compilerOptions: {
                css: "injected",
                runes: true,
                hmr: false,
                discloseVersion: process.env.MODE !== "production",
                dev: process.env.MODE !== "production",
            },
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
                        if (options.watch) {
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

if (options.watch) {
    await context.watch();
} else {
    await context.rebuild();
    await context.dispose();
}
