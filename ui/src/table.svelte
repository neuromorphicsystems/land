<script lang="ts">
    import type { AppState } from "./state";
    import type { ArrayColumn, Dataset, Datasets, Column } from "./dataset";

    const {
        datasets,
        selectedDatasets,
        columnsSelection,
        updateUrl,
        sort = $bindable(),
        datasetDetail = $bindable(),
    }: {
        datasets: Datasets;
        selectedDatasets: Dataset[];
        columnsSelection: boolean[];
        updateUrl: () => void;
        sort: { columnIndex: number; ascending: boolean };
        datasetDetail: {
            index: number;
            open: boolean;
        };
    } = $props();

    function columnToContents(
        column: Column | ArrayColumn,
        data: {
            [key: string]: any;
        },
    ): string {
        if (column.type === "boolean" || column.type === "numerical") {
            return column.accessor(data) ?? "";
        }
        if (column.type === "string") {
            if (datasets.keyToNameToColor.hasOwnProperty(column.name)) {
                const item = column.accessor(data);
                return `<div class="table-tag-wrapper"><span class="table-tag" style="background-color: ${datasets.keyToNameToColor[column.name][item]}">${item}</span></div>`;
            }
            return column.accessor(data) ?? "";
        }
        if (column.type === "stringArray" || column.type === "numericalArray") {
            const values = column.accessor(data);
            if (values == null || values.length === 0) {
                return '<div class="table-array-item"></div>';
            }
            if (datasets.keyToNameToColor.hasOwnProperty(column.name)) {
                return `<div class="table-array-item">${values
                    .map(
                        item =>
                            `<span class="table-tag" style="background-color: ${datasets.keyToNameToColor[column.name][item]}">${item}</span>`,
                    )
                    .join("")}</div>`;
            }
            return `<div class="table-array-item">${values
                .map(item => `<span class="table-tag table-tag-nocolor">${item}</span>`)
                .join("")}</div>`;
        }
        throw new Error(
            `unexpected column type ${column.type} for "${column.name}"`,
        );
    }
</script>

<table>
    <thead>
        <tr>
            {#each datasets.columns as column, index}
                {#if columnsSelection[index]}
                    <th
                        onclick={() => {
                            if (sort.columnIndex === index) {
                                sort.ascending = !sort.ascending;
                            } else {
                                sort.columnIndex = index;
                            }
                            updateUrl();
                        }}
                        >{column.name}{@html sort.columnIndex === index
                            ? sort.ascending
                                ? '&nbsp;&nbsp;&nbsp;<span class="table-array-triangle">&#9650;</span>'
                                : '&nbsp;&nbsp;&nbsp;<span class="table-array-triangle">&#9660;</span>'
                            : ""}</th
                    >
                {/if}
            {/each}
        </tr>
    </thead>

    <tbody>
        {#each selectedDatasets as dataset}
            <tr
                class={datasetDetail.open &&
                datasetDetail.index === dataset.index
                    ? "active"
                    : ""}
                onclick={() => {
                    if (datasetDetail.index === dataset.index) {
                        datasetDetail.open = !datasetDetail.open;
                    } else {
                        datasetDetail.index = dataset.index;
                        datasetDetail.open = true;
                    }
                    updateUrl();
                }}
            >
                {#each datasets.columns as column, index}
                    {#if columnsSelection[index]}
                        <td><div class="td-content">{@html columnToContents(column, dataset.data)}</div></td>
                    {/if}
                {/each}
            </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        font-size: 12px;
        border-collapse: collapse;
        width: 100%;
        white-space: nowrap;
    }

    thead tr th {
        background-color: var(--background-0);
        padding: 10px;
        padding-bottom: 11px;
        box-shadow: inset 0 -1px 0 var(--border);
        text-align: left;
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
        font-size: 12px;
        line-height: 14px;
    }

    td {
        padding: 10px;
    }

    tr:not(:last-of-type) {
        border-bottom: 1px solid var(--border);
    }

    th {
        position: sticky;
        top: 0;
    }

    tbody tr {
        cursor: pointer;
    }

    tbody tr:hover {
        background-color: var(--background-2);
    }

    tbody tr.active {
        background-color: var(--background-3);
    }

    tbody tr.active:hover {
        background-color: var(--background-2);
    }

    .td-content {
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    :global(.td-content .table-tag-wrapper) {
        display: flex;
    }

    :global(.td-content span) {
        overflow: hidden;
        text-overflow: ellipsis;
    }

    :global(.table-array-item) {
        display: flex;
        gap: 5px;
    }

    :global(.table-tag) {
        padding-left: 4px;
        padding-right: 4px;
        padding-top: 2px;
        padding-bottom: 2px;
        border-radius: 4px;
        color: var(--background-0);
    }

    :global(.table-tag.table-tag-nocolor) {
        border: 1px solid var(--content-2);
        color: var(--content-1);
    }

    :global(.table-array-triangle) {
        font-size: 9px;
        line-height: 14px;
    }
</style>
