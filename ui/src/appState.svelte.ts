import { Datasets } from "./dataset";

// @ts-ignore
export const datasets: Datasets = new Datasets(process.env.DATASETS);

export interface AppState {
    yearsValues: [number, number];
    filtersSelection: { [key: string]: number };
    columnsSelection: boolean[];
    sort: { columnIndex: number; ascending: boolean };
    datasetDetail: {
        index: number;
        open: boolean;
    };
    activeTab: number;
}

const defaultAppState: AppState = {
    yearsValues: datasets.yearsBounds,
    filtersSelection: Object.fromEntries(
        datasets.filters.map(filter => [filter.name, 0]),
    ),
    columnsSelection: datasets.columns.map(column => column.default),
    sort: {
        columnIndex: 4,
        ascending: false,
    },
    datasetDetail: {
        index: 0,
        open: false,
    },
    activeTab: 0,
};

function clamp(value: number, minimum: number, maximum: number): number {
    return Math.min(Math.max(value, minimum), maximum);
}

function snakeEncode(key: string): string {
    return key
        .replace(/[\s-]/g, "_")
        .replace(/,\(\)/g, "")
        .replace(/\+/g, "p")
        .toLowerCase();
}

function hashToState(hash: string): AppState {
    const state: AppState = {
        yearsValues: [...defaultAppState.yearsValues],
        filtersSelection: { ...defaultAppState.filtersSelection },
        columnsSelection: [...defaultAppState.columnsSelection],
        sort: { ...defaultAppState.sort },
        datasetDetail: {
            ...defaultAppState.datasetDetail,
        },
        activeTab: defaultAppState.activeTab,
    };
    for (const [key, value] of new URLSearchParams(hash.slice(1)).entries()) {
        switch (key.slice(0, 2)) {
            case "y.": {
                const match = key.slice(2).match(/^(\d{4})_(\d{4})$/);
                if (match == null) {
                    console.warn(
                        `parsing "${key}=${value}" failed (unexpected format)`,
                    );
                } else {
                    const start = parseInt(match[1]);
                    const end = parseInt(match[2]);
                    if (start > end) {
                        console.warn(
                            `parsing "${key}=${value}" failed (start is larger than end)`,
                        );
                    } else {
                        state.yearsValues = [
                            clamp(
                                start,
                                state.yearsValues[0],
                                state.yearsValues[1],
                            ),
                            clamp(
                                end,
                                state.yearsValues[0],
                                state.yearsValues[1],
                            ),
                        ];
                    }
                }
                break;
            }
            case "f.": {
                const snakeName = key.slice(2);
                let found = false;
                for (const filter of datasets.filters) {
                    const filterName = snakeEncode(filter.name);
                    if (filterName === snakeName) {
                        if (value === "any") {
                            found = true;
                        } else {
                            const choices = filter.choices(
                                state.filtersSelection,
                            );
                            for (
                                let choiceIndex = 0;
                                choiceIndex < choices.length;
                                ++choiceIndex
                            ) {
                                if (
                                    value === snakeEncode(choices[choiceIndex])
                                ) {
                                    state.filtersSelection[filter.name] =
                                        choiceIndex + 1;
                                    found = true;
                                    break;
                                }
                            }
                        }
                        break;
                    }
                }
                if (!found) {
                    console.warn(
                        `parsing "${key}=${value}" failed (no match found)`,
                    );
                }
                break;
            }
            case "c.": {
                let enable = true;
                let snakeName = key.slice(2);
                if (snakeName.startsWith("~")) {
                    enable = false;
                    snakeName = snakeName.slice(1);
                }
                let found = false;
                for (
                    let columnIndex = 0;
                    columnIndex < datasets.columns.length;
                    ++columnIndex
                ) {
                    if (
                        snakeEncode(datasets.columns[columnIndex].name) ===
                        snakeName
                    ) {
                        state.columnsSelection[columnIndex] = enable;
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    console.warn(`parsing "${key}" failed (no match found)`);
                }
                break;
            }
            case "s.": {
                let ascending = true;
                let snakeName = key.slice(2);
                if (snakeName.startsWith("-")) {
                    ascending = false;
                    snakeName = snakeName.slice(1);
                }
                let found = false;
                for (
                    let columnIndex = 0;
                    columnIndex < datasets.columns.length;
                    ++columnIndex
                ) {
                    if (
                        snakeEncode(datasets.columns[columnIndex].name) ===
                        snakeName
                    ) {
                        state.sort = {
                            columnIndex,
                            ascending,
                        };
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    console.warn(`parsing "${key}" failed (no match found)`);
                }
                break;
            }
            case "d.": {
                const snakeName = key.slice(2);
                let found = false;
                for (
                    let datasetIndex = 0;
                    datasetIndex < datasets.inner.length;
                    ++datasetIndex
                ) {
                    if (
                        snakeEncode(datasets.inner[datasetIndex].data.name) ===
                        snakeName
                    ) {
                        state.datasetDetail = {
                            index: datasetIndex,
                            open: true,
                        };
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    console.warn(`parsing "${key}" failed (no match found)`);
                }
                break;
            }
            case "t.": {
                switch (key.slice(2)) {
                    case "table":
                        state.activeTab = 0;
                        break;
                    case "tiles":
                        state.activeTab = 1;
                        break;
                    case "graph":
                        state.activeTab = 2;
                        break;
                    default:
                        console.warn(
                            `parsing "${key}" failed (no match found)`,
                        );
                        break;
                }
                break;
            }
            default: {
                console.warn(
                    `parsing "${key}=${value}" failed (unknown prefix)`,
                );
            }
        }
    }
    return state;
}

function stateToUrl(state: AppState): string {
    let prefix = "#";
    let url = "";
    if (
        state.yearsValues[0] !== datasets.yearsBounds[0] ||
        state.yearsValues[1] !== datasets.yearsBounds[1]
    ) {
        url += `${prefix}y.${state.yearsValues[0]}_${state.yearsValues[1]}`;
        prefix = "&";
    }
    for (const [name, selection] of Object.entries(state.filtersSelection)) {
        if (selection > 0) {
            for (const filter of datasets.filters) {
                if (filter.name === name) {
                    url += `${prefix}f.${snakeEncode(name)}=${snakeEncode(filter.choices(state.filtersSelection)[selection - 1])}`;
                    prefix = "&";
                    break;
                }
            }
        }
    }
    for (
        let columnIndex = 0;
        columnIndex < defaultAppState.columnsSelection.length;
        ++columnIndex
    ) {
        if (
            state.columnsSelection[columnIndex] !==
            defaultAppState.columnsSelection[columnIndex]
        ) {
            url += `${prefix}c.${state.columnsSelection[columnIndex] ? "" : "~"}${snakeEncode(datasets.columns[columnIndex].name)}`;
            prefix = "&";
        }
    }
    if (
        state.sort.ascending !== defaultAppState.sort.ascending ||
        state.sort.columnIndex !== defaultAppState.sort.columnIndex
    ) {
        url += `${prefix}s.${state.sort.ascending ? "" : "-"}${snakeEncode(datasets.columns[state.sort.columnIndex].name)}`;
        prefix = "&";
    }
    if (state.datasetDetail.open) {
        url += `${prefix}d.${snakeEncode(datasets.inner[state.datasetDetail.index].data.name)}`;
        prefix = "&";
    }
    if (state.activeTab > 0) {
        switch (state.activeTab) {
            case 1:
                url += `${prefix}t.tiles`;
                prefix = "&";
                break;
            case 2:
                url += `${prefix}t.graph`;
                prefix = "&";
                break;
            default:
                throw new Error(`unexpected active tab ${state.activeTab}`);
        }
    }
    return url;
}

// @ts-ignore
export const appState: AppState = $state(hashToState(window.location.hash));

let lastPush = window.performance.now();
export function updateUrl() {
    const now = window.performance.now();
    if (now - lastPush < 5000) {
        window.history.replaceState(
            undefined,
            "",
            `${location.pathname}${stateToUrl(appState)}`,
        );
    } else {
        window.history.pushState(
            undefined,
            "",
            `${location.pathname}${stateToUrl(appState)}`,
        );
        lastPush = now;
    }
}
updateUrl();
window.addEventListener("hashchange", () => {
    for (const [key, value] of Object.entries(
        hashToState(window.location.hash),
    )) {
        appState[key] = value;
    }
});
