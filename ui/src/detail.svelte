<script lang="ts">
    import type { ArrayColumn, Column, Dataset } from "./dataset";

    import { Datasets } from "./dataset";
    import { snakeEncode } from "./state";

    const {
        datasets,
        dataset,
        width,
        updateUrl,
        datasetDetail = $bindable(),
    }: {
        datasets: Datasets;
        dataset: Dataset;
        width: string;
        updateUrl?: () => void;
        datasetDetail?: {
            index: number;
            open: boolean;
        };
    } = $props();

    function columnToContents(
        column: Column | ArrayColumn,
        data: {
            [key: string]: any;
        },
    ): string | null {
        if (column.type === "boolean") {
            const value = column.accessor(data);
            if (value == null || value.length === 0) {
                return null;
            }
            if (column.filter != null) {
                let href = column.filter[1] ? "#a&" : "#";
                href += `f.${snakeEncode(column.filter[0])}=${value.endsWith("&#10003;</span>") ? "yes" : "no"}&`;
                href += `c.${snakeEncode(column.name)}`;
                return value
                    .replace("</span>", "</a>")
                    .replace(
                        "<span",
                        `<a href="${href}" target="_blank" class="detail-boolean"`,
                    );
            }
            return value;
        }
        if (column.type === "string" || column.type === "numerical") {
            const value = column.accessor(data);
            if (value == null || value.length === 0) {
                return null;
            }
            // for non-boolean columns, guarantees that column.name is in datasets.keyToNameToColor
            if (column.filter != null) {
                let href = column.filter[1] ? "#a&" : "#";
                href += `f.${snakeEncode(column.filter[0])}=${snakeEncode(value)}&`;
                href += `c.${snakeEncode(column.name)}`;
                return `<a href="${href}" target="_blank" class="detail-tag" style="background-color: ${datasets.keyToNameToColor[column.name][value]}">${value}</span>`;
            }
            return value;
        }
        if (column.type === "stringArray" || column.type === "numericalArray") {
            const values = column.accessor(data);
            if (values == null || values.length === 0) {
                return null;
            }
            // for non-boolean columns, guarantees that column.name is in datasets.keyToNameToColor
            if (column.filter != null) {
                return `<div class="detail-array-item">${values
                    .map(item => {
                        let href = column.filter[1] ? "#a&" : "#";
                        href += `f.${snakeEncode(column.filter[0])}=${snakeEncode(item)}&`;
                        href += `c.${snakeEncode(column.name)}`;
                        return `<a href="${href}" target="_blank" class="detail-tag" style="background-color: ${datasets.keyToNameToColor[column.name][item]}">${item}</a>`;
                    })
                    .join("")}</div>`;
            }
            return `<div class="detail-array-item">${values
                .map(item => `<span>${item}</span>`)
                .join("")}</div>`;
        }
        throw new Error(
            `unexpected column type ${column.type} for "${column.name}"`,
        );
    }

    const namesAndContents: [string, string][] = $derived(
        datasets.columns
            .map(column => [
                column.name,
                columnToContents(column, dataset.data),
            ])
            .filter(
                ([name, contents]) =>
                    name !== "Name" &&
                    name !== "Description" &&
                    contents != null,
            ) as [string, string][],
    );
    const bibtex = $derived.by(() => {
        const bibtex = dataset.data.bibtex;
        if (bibtex == null) {
            return null;
        }
        return [
            `@${bibtex.type}{${bibtex.key},`,
            ...Object.entries(bibtex)
                .filter(([key, value]) => key !== "type" && key !== "key")
                .map(
                    ([key, value]) =>
                        `&nbsp;&nbsp;&nbsp;&nbsp;${key}={${value}},`,
                ),
            "}",
        ].join("<br />");
    });
    const linksHaveFormat = $derived(
        dataset.data.dataset_properties?.dataset_links.some(
            link => link.format != null && link.format.length > 0,
        ),
    );
    const linksHaveDoi = $derived(
        dataset.data.dataset_properties?.dataset_links.some(
            link => link.doi != null && link.doi.length > 0,
        ),
    );
    const linksHaveAvailable = $derived(
        dataset.data.dataset_properties?.dataset_links.some(
            link => link.available != null,
        ),
    );
    const linksHaveComment = $derived(
        dataset.data.dataset_properties?.dataset_links.some(
            link => link.comment != null && link.comment.length > 0,
        ),
    );
    function linkTypeToName(linkType: string): string {
        const lowercase = linkType.replace("_", " ");
        return lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
    }
</script>

<div class="detail" style="width: {width}">
    <div class="header">
        <div class="label">
            <div class="title">{dataset.data.name}</div>
            <div class="description">{dataset.data.description}</div>
        </div>
        <div class="buttons">
            <a
                class="button"
                href="http://github.com/neuromorphicsystems/land/tree/main/datasets/{dataset
                    .data.name}.md"
                target="_blank"
                aria-label="GitHub"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
                    ><path
                        fill="#D8D8D8"
                        fill-rule="evenodd"
                        d="M50.0413725,1 C22.3697862,1 -5.68434189e-14,23.5346992 -5.68434189e-14,51.4131951 C-5.68434189e-14,73.697964 14.333093,92.5615558 34.2168922,99.2379726 C36.7028792,99.7398819 37.6134859,98.1532342 37.6134859,96.8185654 C37.6134859,95.6498339 37.5315416,91.643779 37.5315416,87.4697381 C23.6112433,90.4750476 20.7124615,81.4601436 20.7124615,81.4601436 C18.4753804,75.6175106 15.1607311,74.1158802 15.1607311,74.1158802 C10.6046246,71.0276021 15.4926057,71.0276021 15.4926057,71.0276021 C20.5465242,71.3615254 23.1984485,76.2023885 23.1984485,76.2023885 C27.6715863,83.8805751 34.8796172,81.7110982 37.7794232,80.3754051 C38.1932423,77.1201654 39.5197166,74.8666954 40.9281353,73.6149953 C29.8256987,72.4462639 18.1445301,68.1062857 18.1445301,48.7418089 C18.1445301,43.2330993 20.1316808,38.7261594 23.2803929,35.2209894 C22.7836052,33.9692893 21.0433119,28.7934786 23.7782049,21.8661072 C23.7782049,21.8661072 28.003461,20.5304141 37.5305172,27.0408936 C41.6093888,25.937372 45.815863,25.3760037 50.0413725,25.3712772 C54.2666286,25.3712772 58.5738291,25.9561551 62.5512035,27.0408936 C72.0792841,20.5304141 76.3045402,21.8661072 76.3045402,21.8661072 C79.0394332,28.7934786 77.2981155,33.9692893 76.8013279,35.2209894 C80.0330086,38.7261594 81.938215,43.2330993 81.938215,48.7418089 C81.938215,68.1062857 70.2570463,72.3622709 59.0716411,73.6149953 C60.8949031,75.2006187 62.4682348,78.2049038 62.4682348,82.9627983 C62.4682348,89.723208 62.3862905,95.148949 62.3862905,96.8175411 C62.3862905,98.1532342 63.2979215,99.7398819 65.7828842,99.2389969 C85.6666834,92.5605315 100,73.697964 100,51.4131951 C100.081721,23.5346992 77.6299902,1 50.0413725,1 Z"
                    /></svg
                >
            </a>
            <div
                class="button"
                role="none"
                onclick={() => {
                    if (datasetDetail != null) {
                        datasetDetail.open = false;
                        if (updateUrl != null) {
                            updateUrl();
                        }
                    }
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
                    ><path
                        fill-rule="evenodd"
                        d="M50,0 C77.6142375,0 100,22.3857625 100,50 C100,77.6142375 77.6142375,100 50,100 C22.3857625,100 0,77.6142375 0,50 C0,22.3857625 22.3857625,0 50,0 Z M50,20 C47.790861,20 46,21.790861 46,24 L46,46 L24,46 C21.8578046,46 20.1089211,47.6839685 20.0048953,49.8003597 L20,50 C20,52.209139 21.790861,54 24,54 L46,54 L46,76 C46,78.1421954 47.6839685,79.8910789 49.8003597,79.9951047 L50,80 C52.209139,80 54,78.209139 54,76 L54,54 L76,54 C78.1421954,54 79.8910789,52.3160315 79.9951047,50.1996403 L80,50 C80,47.790861 78.209139,46 76,46 L54,46 L54,24 C54,21.8578046 52.3160315,20.1089211 50.1996403,20.0048953 Z"
                        transform="rotate(45 50 50)"
                    /></svg
                >
            </div>
        </div>
    </div>
    <div class="contents-wrapper">
        <div class="frontmatter">
            <table class="properties">
                <tbody>
                    {#each namesAndContents as nameAndContents}
                        <tr>
                            <td>{nameAndContents[0]}</td>
                            <td>{@html nameAndContents[1]}</td>
                        </tr>
                    {/each}
                    {#if dataset.data.dataset_properties?.availability_comment != null && dataset.data.dataset_properties.availability_comment.length > 0}
                        <tr>
                            <td>Availability</td>
                            <td
                                >{dataset.data.dataset_properties
                                    .availability_comment}</td
                            >
                        </tr>
                    {/if}
                    {#if dataset.data.dataset_properties?.size_gb != null}
                        <tr>
                            <td>Size</td>
                            <td>
                                {dataset.data.dataset_properties.size_gb} GB
                                {#if dataset.data.dataset_properties.size_type != null}
                                    ({dataset.data.dataset_properties.size_type.toLowerCase()})
                                {/if}
                            </td>
                        </tr>
                    {/if}
                </tbody>
            </table>

            {#if dataset.data.dataset_properties?.dataset_links != null && dataset.data.dataset_properties.dataset_links.length > 0}
                <div class="section">
                    <div class="section-title">Dataset links</div>
                    <table class="links">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>URL</th>
                                {#if linksHaveFormat}
                                    <th>Format</th>
                                {/if}
                                {#if linksHaveDoi}
                                    <th>DOI</th>
                                {/if}
                                {#if linksHaveAvailable}
                                    <th>Available</th>
                                {/if}
                                {#if linksHaveComment}
                                    <th>Comment</th>
                                {/if}
                            </tr>
                        </thead>
                        <tbody>
                            {#each dataset.data.dataset_properties.dataset_links as link}
                                <tr>
                                    <td>{link.name}</td>
                                    <td
                                        ><a href={link.url} target="_blank"
                                            >{link.url}</a
                                        ></td
                                    >
                                    {#if linksHaveFormat}
                                        <td>{link.format}</td>
                                    {/if}
                                    {#if linksHaveDoi}
                                        <td>{link.doi}</td>
                                    {/if}
                                    {#if linksHaveAvailable}
                                        {#if link.available}
                                            <td
                                                style="color: #B4DEC6; font-weight: bold"
                                                >&#10003;</td
                                            >
                                        {:else}
                                            <td
                                                style="color: #874037; font-weight: bold"
                                                >&#10007;</td
                                            >
                                        {/if}
                                    {/if}
                                    {#if linksHaveComment}
                                        <td>{link.comment}</td>
                                    {/if}
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
            {/if}

            {#if dataset.data.links != null && dataset.data.links.length > 0}
                <div class="section">
                    <div class="section-title">Other links</div>
                    <table class="links other">
                        <tbody>
                            {#each dataset.data.links as link}
                                <tr>
                                    <td>{linkTypeToName(link.type)}</td>
                                    <td
                                        ><a href={link.url} target="_blank"
                                            >{link.url}</a
                                        ></td
                                    >
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
            {/if}

            {#if dataset.data.paper != null}
                <div class="section paper">
                    <div class="section-title">Paper</div>
                    <div class="authors">
                        {#if dataset.data.paper.authors.length === 1}
                            {dataset.data.paper.authors[0]},
                        {:else if dataset.data.paper.authors.length === 2}
                            {dataset.data.paper.authors[0]} and {dataset.data
                                .paper.authors[1]},
                        {:else}
                            {dataset.data.paper.authors
                                .slice(0, dataset.data.paper.authors.length - 1)
                                .join(", ")}, and {dataset.data.paper.authors[
                                dataset.data.paper.authors.length - 1
                            ]},
                        {/if}
                    </div>
                    <div class="paper-title">
                        {dataset.data.paper.title}
                    </div>
                    <div class="doi">
                        <div class="paper-label">DOI</div>
                        <a
                            href="https://doi.org/{dataset.data.paper.doi}"
                            target="_blank"
                            >https://doi.org/{dataset.data.paper.doi}</a
                        >
                    </div>
                    <div class="open-access">
                        <div class="paper-label">Open Access</div>
                        {#if dataset.data.paper.open_access}
                            <span style="color: #B4DEC6; font-weight: bold"
                                >&#10003;</span
                            >
                        {:else}
                            <span style="color: #874037; font-weight: bold"
                                >&#10007;</span
                            >
                        {/if}
                    </div>
                    <div class="abstract">
                        {dataset.data.paper.abstract}
                    </div>
                </div>
            {/if}
            {#if bibtex != null}
                <div class="section">
                    <div class="section-title">BibTeX</div>
                    <div class="bibtex-contents">{@html bibtex}</div>
                </div>
            {/if}
        </div>
        <div class="markdown-wrapper">
            <div class="markdown">
                {@html dataset.html}
            </div>
        </div>
    </div>
</div>

<style>
    .detail {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .header {
        display: flex;
        padding: 20px;
        gap: 20px;
        justify-content: space-between;
        align-items: center;
    }

    .header .label .title {
        font-size: 16px;
        color: var(--content-0);
        margin-bottom: 5px;
    }

    .header .label .description {
        font-size: 14px;
        color: var(--content-1);
    }

    .header .buttons {
        display: flex;
        gap: 20px;
    }

    .header .buttons .button {
        display: block;
        flex-grow: 0;
        flex-shrink: 0;
        width: 25px;
        height: 25px;
        cursor: pointer;
    }

    .header .buttons .button svg path {
        fill: var(--content-2);
    }

    .header .buttons .button:hover svg path {
        fill: var(--content-1);
    }

    .section {
        max-width: 100%;
        overflow-x: auto;
    }

    .contents-wrapper {
        flex-shrink: 1;
        flex-grow: 1;
        overflow-x: hidden;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        padding: 20px;
        padding-top: 0;
        gap: 20px;
    }

    .frontmatter {
        background-color: var(--background-1);
        border: 1px solid var(--background-3);
        border-radius: 8px;
        padding: 20px;
    }

    .frontmatter table {
        font-size: 14px;
    }

    .frontmatter table.properties tr td {
        padding-bottom: 5px;
    }

    .frontmatter table tr td:last-of-type {
        padding-left: 10px;
    }

    .frontmatter table.properties tr td:first-of-type {
        display: inline-block;
        text-align: right;
        padding-right: 10px;
        color: var(--content-1);
    }

    .frontmatter table.links tr td {
        vertical-align: top;
    }

    .frontmatter table.links a {
        display: inline-block;
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--blue-1);
    }

    .frontmatter table.links.other a {
        max-width: 300px;
    }

    .frontmatter table.links a:hover {
        color: var(--blue-0);
    }

    .frontmatter table.links a:visited {
        color: var(--purple-1);
    }

    .frontmatter table.links a:visited:hover {
        color: var(--purple-0);
    }

    .frontmatter table.links {
        white-space: nowrap;
    }

    .frontmatter table.links thead tr th {
        font-weight: normal;
        color: var(--content-1);
    }

    .frontmatter table.links thead tr th {
        text-align: left;
    }

    .frontmatter table.links tr th:not(:first-of-type) {
        padding-left: 10px;
    }

    .frontmatter table.links tr th:not(:last-of-type) {
        padding-right: 10px;
    }

    .frontmatter table.links tr td:not(:first-of-type) {
        padding-left: 10px;
    }

    .frontmatter table.links tr td:not(:last-of-type) {
        padding-right: 10px;
    }

    .frontmatter .section-title {
        padding-top: 20px;
        font-size: 14px;
        color: var(--content-2);
        padding-bottom: 10px;
    }

    :global(.detail-array-item) {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }

    :global(.detail-array-item span, a.detail-tag) {
        padding-left: 4px;
        padding-right: 4px;
        padding-top: 2px;
        padding-bottom: 2px;
        border-radius: 4px;
    }

    :global(a.detail-tag) {
        text-decoration: none;
        color: var(--background-0);
    }

    :global(a.detail-tag:hover) {
        opacity: 0.7;
    }

    :global(.detail-array-item span) {
        border: 1px solid var(--content-2);
        color: var(--content-1);
    }

    :global(a.detail-boolean) {
        text-decoration: none;
    }

    :global(a.detail-boolean:hover) {
        opacity: 0.7;
    }

    .paper .authors {
        font-size: 14px;
        padding-bottom: 5px;
    }

    .paper .paper-title {
        font-size: 14px;
        font-style: italic;
        padding-bottom: 5px;
    }

    .paper .doi {
        display: flex;
        gap: 10px;
        padding-bottom: 5px;
    }

    .paper .doi .paper-label {
        font-size: 14px;
        color: var(--content-1);
    }

    .paper .doi a {
        font-size: 14px;
    }

    .paper .doi a {
        color: var(--blue-1);
    }

    .paper .doi a:hover {
        color: var(--blue-0);
    }

    .paper .doi a:visited {
        color: var(--purple-1);
    }

    .paper .doi a:visited:hover {
        color: var(--purple-0);
    }

    .paper .open-access {
        display: flex;
        gap: 10px;
        padding-bottom: 10px;
    }

    .paper .open-access .paper-label {
        font-size: 14px;
        color: var(--content-1);
    }

    .paper .open-access span {
        font-size: 14px;
    }

    .paper .abstract {
        font-size: 12px;
        text-align: justify;
    }

    .bibtex-contents {
        font-size: 12px;
        font-family: "RobotoMono", monospace;
    }

    .markdown-wrapper {
        background-color: var(--background-1);
        border: 1px solid var(--background-3);
        border-radius: 8px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .markdown {
        overflow-x: auto;
        padding-top: 20px;
        padding-bottom: 20px;
        word-break: break-word;
        font-size: 14px;
    }

    .markdown :global(h1),
    .markdown :global(h2),
    .markdown :global(h3),
    .markdown :global(h4),
    .markdown :global(h5),
    .markdown :global(h6) {
        font-size: 14px;
        font-weight: 400;
        margin: 0;
        margin-bottom: 10px;
        color: var(--content-2);
    }

    .markdown :global(code) {
        font-size: 12px;
        font-family: "RobotoMono", monospace;
    }

    .markdown :global(table) {
        border-collapse: collapse;
        word-break: keep-all;
        white-space: nowrap;
        font-size: 12px;
    }

    .markdown :global(table thead tr th) {
        padding: 10px;
        padding-bottom: 11px;
        text-align: left;
        border-bottom: 1px solid var(--background-3);
    }

    .markdown :global(table td) {
        padding: 10px;
    }

    .markdown :global(table tbody tr:nth-child(even)) {
        background-color: var(--border);
    }

    .markdown :global(table th:not(:last-child)) {
        border-right: 1px solid var(--background-3);
    }

    .markdown :global(table td:not(:last-child)) {
        border-right: 1px solid var(--background-3);
    }
</style>
