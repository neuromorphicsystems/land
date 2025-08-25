<script lang="ts">
    import type { Datasets } from "./dataset";

    import {
        initialAppState,
        getDefaultAppState,
        hashToState,
        updateUrlWithState,
    } from "./state";
    import Detail from "./detail.svelte";
    import Filter from "./filter.svelte";
    import Multiselect from "./multiselect.svelte";
    import Navbar from "./navbar.svelte";
    import Range from "./range.svelte";
    import Switch from "./switch.svelte";
    import Table from "./table.svelte";

    const {
        datasets,
    }: {
        datasets: Datasets;
    } = $props();

    const defaultAppState = getDefaultAppState(datasets);
    const appState = $state(initialAppState(defaultAppState, datasets));

    function updateUrl() {
        updateUrlWithState(appState, defaultAppState, datasets);
    }

    const filters = $derived(
        appState.advancedSearch ? datasets.advancedFilters : datasets.filters,
    );
    const counts = $derived.by(() => {
        const result: { [key: string]: number[] } = {};
        for (const filter of filters) {
            let datasetsFilteredByOthers = datasets.inner.filter(
                dataset =>
                    dataset.data.year >= appState.yearsValues[0] &&
                    dataset.data.year <= appState.yearsValues[1],
            );
            for (const otherFilter of filters) {
                if (otherFilter.name !== filter.name) {
                    datasetsFilteredByOthers = otherFilter.filter(
                        datasetsFilteredByOthers,
                        appState.filtersSelection,
                    );
                }
            }
            result[filter.name] = [
                datasetsFilteredByOthers.length,
                ...filter.counts(
                    datasetsFilteredByOthers,
                    appState.filtersSelection,
                ),
            ];
        }
        return result;
    });
    const tableDatasets = $derived.by(() => {
        const result = filters
            .reduce(
                (filteredDatasets, filter) =>
                    filter.filter(filteredDatasets, appState.filtersSelection),
                datasets.inner.filter(
                    dataset =>
                        dataset.data.year >= appState.yearsValues[0] &&
                        dataset.data.year <= appState.yearsValues[1],
                ),
            )
            .slice();
        const column = datasets.columns[appState.sort.columnIndex];
        const sign = appState.sort.ascending ? 1 : -1;
        switch (column.type) {
            case "string":
            case "boolean":
                result.sort((a, b) => {
                    const aValue = column.accessor(a.data);
                    const bValue = column.accessor(b.data);
                    if (aValue == null || aValue.length === 0) {
                        if (bValue == null || bValue.length === 0) {
                            return 0;
                        }
                        return -sign;
                    } else {
                        if (bValue == null || bValue.length === 0) {
                            return sign;
                        }
                        return aValue.localeCompare(bValue) * sign;
                    }
                });
                break;
            case "numerical":
                result.sort((a, b) => {
                    const aValue = column.accessor(a.data);
                    const bValue = column.accessor(b.data);
                    if (aValue == null || aValue.length === 0) {
                        if (bValue == null || bValue.length === 0) {
                            return 0;
                        }
                        return -sign;
                    } else {
                        if (bValue == null || bValue.length === 0) {
                            return sign;
                        }
                        return (parseFloat(aValue) - parseFloat(bValue)) * sign;
                    }
                });
                break;
            case "stringArray":
                result.sort((a, b) => {
                    const aValues = column.accessor(a.data);
                    const bValues = column.accessor(b.data);
                    if (aValues == null || aValues.length === 0) {
                        if (bValues == null || bValues.length === 0) {
                            return 0;
                        }
                        return -sign;
                    } else {
                        if (bValues == null || bValues.length === 0) {
                            return sign;
                        }
                        return aValues[0].localeCompare(bValues[0]) * sign;
                    }
                });
                break;
            case "numericalArray":
                result.sort((a, b) => {
                    const aValues = column.accessor(a.data);
                    const bValues = column.accessor(b.data);
                    if (aValues == null || aValues.length === 0) {
                        if (bValues == null || bValues.length === 0) {
                            return 0;
                        }
                        return -sign;
                    } else {
                        if (bValues == null || bValues.length === 0) {
                            return sign;
                        }
                        return (
                            (parseFloat(aValues[0]) - parseFloat(bValues[0])) *
                            sign
                        );
                    }
                });
                break;
            default:
                throw new Error(
                    // @ts-ignore
                    `unknown column type ${column.type} for column ${column.name}`,
                );
        }
        return result;
    });
</script>

<svelte:window
    onhashchange={() => {
        for (const [key, value] of Object.entries(
            hashToState(window.location.hash, defaultAppState, datasets),
        )) {
            appState[key] = value;
        }
    }}
/>

<main>
    <div class="navbar">
        <Navbar {updateUrl} bind:activeTab={appState.activeTab}></Navbar>
    </div>
    <div class="contents">
        <Switch
            label="Advanced search"
            onChange={newValue => {
                appState.advancedSearch = newValue;
                updateUrl();
            }}
            checked={appState.advancedSearch}
        ></Switch>
        <div class="filters">
            {#each filters as filter}
                <Filter
                    title={filter.name}
                    choices={filter.choices(appState.filtersSelection)}
                    counts={counts[filter.name]}
                    choicesWidth={filter.width}
                    active={appState.filtersSelection[filter.name]}
                    onChange={newValue => {
                        const newSelection = $state.snapshot(
                            appState.filtersSelection,
                        );
                        newSelection[filter.name] = newValue;
                        const changes: [string, number][] = [
                            [filter.name, newValue],
                        ];
                        // we do not expect to have more than 10 levels of reactive updates
                        // currently, there is at most 1 level (category -> subcategory)
                        for (let iteration = 0; iteration < 10; ++iteration) {
                            for (const otherFilter of filters) {
                                if (otherFilter.name !== filter.name) {
                                    const otherNewValue =
                                        otherFilter.reactiveUpdate(
                                            appState.filtersSelection,
                                            newSelection,
                                        );
                                    if (otherNewValue != null) {
                                        newSelection[otherFilter.name] =
                                            otherNewValue;
                                        changes.push([
                                            otherFilter.name,
                                            otherNewValue,
                                        ]);
                                    }
                                }
                            }
                            for (const [name, value] of changes) {
                                appState.filtersSelection[name] = value;
                            }
                            if (
                                changes.length === 0 ||
                                (iteration === 0 && changes.length === 1)
                            ) {
                                break;
                            }
                            changes.length = 0;
                        }
                        updateUrl();
                    }}
                ></Filter>
            {/each}
        </div>
        <div class="control">
            <Range
                bounds={datasets.yearsBounds}
                onChange={values => {
                    appState.yearsValues = values;
                    updateUrl();
                }}
                values={appState.yearsValues}
            ></Range>
            <Multiselect
                title="Columns"
                choices={datasets.columns.map(column => column.name)}
                selection={appState.columnsSelection}
            ></Multiselect>
        </div>
        <div class="visualiser">
            <Table
                {updateUrl}
                {datasets}
                selectedDatasets={tableDatasets}
                columnsSelection={appState.columnsSelection}
                bind:sort={appState.sort}
                bind:datasetDetail={appState.datasetDetail}
            ></Table>
        </div>
    </div>
    <div
        class="detail"
        style="width: {appState.datasetDetail.open
            ? 'calc(50vw - 56px / 2)'
            : '0'}"
    >
        <Detail
            {updateUrl}
            {datasets}
            dataset={datasets.inner[appState.datasetDetail.index]}
            width="calc(50vw - 56px / 2)"
            bind:datasetDetail={appState.datasetDetail}
        ></Detail>
    </div>
</main>

<style>
    :root {
        overscroll-behavior: none;
        --status-bar-height: 50px;
        --device-pane-width: 300px;
        --display-pane-width: 300px;
        --background-0: #090909;
        --background-1: #151515;
        --background-2: #303030;
        --background-3: #444444;
        --border: #272727;
        --content-0: #ffffff;
        --content-1: #cccccc;
        --content-2: #999999;
        --blue-0: #4e7ab0;
        --red-0: #a50e0e;
        --yellow-0: #e37400;
        --purple-0: #5b558d;
        --blue-1: #5fa6c7;
        --red-1: #ea4335;
        --yellow-1: #fbbc04;
        --purple-1: #7771aa;
    }

    main {
        display: flex;
        width: 100vw;
        height: 100vh;
    }

    .navbar {
        background-color: var(--background-0);
        border-right: 1px solid var(--border);
        width: 56px;
        flex-grow: 0;
        flex-shrink: 0;
    }

    .contents {
        padding: 20px;
        gap: 10px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-shrink: 1;
    }

    .detail {
        flex-grow: 0;
        flex-shrink: 0;
        overflow: hidden;
        background-color: var(--background-2);
        border-left: 1px solid var(--background-3);
        transition: width 0.3s;
    }

    .filters {
        flex-grow: 0;
        flex-shrink: 0;
        background-color: var(--background-0);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 20px;
        display: flex;
        height: 308px;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 10px;
        overflow-x: auto;
        overflow-y: hidden;
        align-content: flex-start;
    }

    .control {
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        gap: 10px;
    }

    .visualiser {
        background-color: var(--background-0);
        border: 1px solid var(--border);
        border-radius: 8px;
        overflow: auto;
    }
</style>
