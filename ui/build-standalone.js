import * as fs from "node:fs";
import * as path from "node:path";
import * as process from "node:process";
import * as vm from "node:vm";

import * as commander from "commander";
import * as esbuild from "esbuild";
import mustache from "mustache";
import sveltePlugin from "esbuild-svelte";

import { generateKeyToNameToColor, loadDatasets, nameToUrl } from "./data.js";

const command = new commander.Command("build-standalone.js").argument(
    "[dataset...]",
    "Name of the dataset to build (defaults to all datasets)",
);
command.parse();

fs.mkdirSync("build", { recursive: true });

const [datasets, datasetsDirectory] = loadDatasets();
const nameToDataset = new Map(
    datasets.map(dataset => [dataset.data.name, dataset]),
);
const datasetsNames = [];
if (command.args.length === 0) {
    datasetsNames.push(...nameToDataset.keys());
} else {
    for (const name of command.args) {
        if (!nameToDataset.has(name)) {
            console.error(
                `\x1b[31m✘\x1b[0m Unknown dataset "${name}" (the file ${path.join(datasetsDirectory, `${name}.md`)} does not exist)`,
            );
            process.exit(1);
        }
        datasetsNames.push(name);
    }
}
const keyToNameToColor = generateKeyToNameToColor(datasets);

const writtenFontFiles = new Set();
for (const name of datasetsNames) {
    const dataset = nameToDataset.get(name);
    console.log(name);
    const context = await esbuild.context({
        entryPoints: [
            { in: path.join("src", "mainStandalone.ts"), out: "main" },
            { in: path.join("src", "styles.css"), out: "styles" },
        ],
        mainFields: ["svelte", "browser", "module", "main"],
        conditions: ["svelte", "browser"],
        outdir: "build",
        bundle: true,
        loader: { ".woff2": "copy" },
        target: ["node24"],
        format: "esm",
        write: false,
        define: {
            "process.env.DATA": JSON.stringify({
                datasets: [dataset],
                keyToNameToColor,
            }),
            "process.env.BASE_URL": JSON.stringify(
                "https://neuromorphicsystems.github.io/land/",
            ),
            "process.env.GITHUB_URL": JSON.stringify(
                "http://github.com/neuromorphicsystems/land/",
            ),
        },
        plugins: [
            sveltePlugin({
                compilerOptions: {
                    css: "external",
                    cssHash: ({ hash, css, _name, _filename }) =>
                        `s${hash(css)}`,
                    runes: true,
                    generate: "server",
                    hmr: false,
                    discloseVersion: process.env.MODE !== "production",
                    dev: process.env.MODE !== "production",
                },
            }),
            {
                name: "bundle",
                setup(build) {
                    build.onEnd(async result => {
                        if (result.errors.length === 0) {
                            const context = vm.createContext({ result: null });
                            vm.runInContext(
                                result.outputFiles.find(file =>
                                    file.path.endsWith("main.js"),
                                ).text,
                                context,
                            );
                            if (context.result == null) {
                                throw new Error("HTML generation failed");
                            }
                            const minify = async (code, loader) => {
                                if (process.env.MODE === "production") {
                                    return (
                                        await esbuild.transform(code, {
                                            minify: true,
                                            loader,
                                        })
                                    ).code;
                                }
                                return code;
                            };
                            for (const file of result.outputFiles) {
                                if (file.path.endsWith(".woff2")) {
                                    if (!writtenFontFiles.has(file.path)) {
                                        fs.writeFileSync(
                                            file.path,
                                            file.contents,
                                        );
                                        writtenFontFiles.add(file.path);
                                    }
                                }
                            }
                            fs.writeFileSync(
                                path.join("build", `${nameToUrl(name)}.html`),
                                mustache.render(
                                    fs
                                        .readFileSync(
                                            path.join(
                                                "src",
                                                "indexStandalone.mustache",
                                            ),
                                        )
                                        .toString(),
                                    {
                                        title: name,
                                        styles: await minify(
                                            result.outputFiles.find(file =>
                                                file.path.endsWith(
                                                    "styles.css",
                                                ),
                                            ).text,
                                            "css",
                                        ),
                                        svelteStyles: await minify(
                                            result.outputFiles.find(file =>
                                                file.path.endsWith("main.css"),
                                            ).text,
                                            "css",
                                        ),
                                        head: context.result.head,
                                        body: context.result.body.replace(
                                            /<!--.*?-->/g,
                                            "",
                                        ),
                                    },
                                ),
                            );
                        }
                    });
                },
            },
        ],
    });
    await context.rebuild();
    await context.dispose();
}
