import * as colormaps from "./colormaps";

export interface Dataset {
    data: {
        [key: string]: any;
    };
    html: string;
    index: number;
}

interface Filter {
    name: string;
    width: number;
    choices(selection: { [key: string]: number }): string[];
    counts: (
        datasets: Dataset[],
        selection: { [key: string]: number },
    ) => number[];
    reactiveUpdate: (
        selection: { [key: string]: number },
        newSelection: { [key: string]: number },
    ) => number | null;
    filter: (
        datasets: Dataset[],
        selection: { [key: string]: number },
    ) => Dataset[];
}

function staticFilterChoices(
    datasets: Dataset[],
    accessor: (data: { [key: string]: any }) => string,
): string[] {
    return Array.from(
        new Set(
            datasets
                .map(dataset => accessor(dataset.data))
                .filter(entry => entry != null),
        ),
    ).sort();
}

function staticFilterArrayChoices(
    datasets: Dataset[],
    accessor: (data: { [key: string]: any }) => string[],
): string[] {
    const set: Set<string> = new Set();
    for (const dataset of datasets) {
        for (const entry of accessor(dataset.data)) {
            set.add(entry);
        }
    }
    return Array.from(set).sort();
}

function dynamicFilterArrayChoices(
    datasets: Dataset[],
    driverAccessor: (data: { [key: string]: any }) => string,
    accessor: (data: { [key: string]: any }) => string[],
): string[][] {
    const choices = staticFilterChoices(datasets, driverAccessor);
    const result: string[][] = [];
    const allSubSet: Set<string> = new Set();
    for (const choice of choices) {
        const subSet: Set<string> = new Set();
        for (const dataset of datasets) {
            if (driverAccessor(dataset.data) === choice) {
                const subEntries = accessor(dataset.data);
                if (subEntries != null) {
                    for (const subEntry of subEntries) {
                        subSet.add(subEntry);
                    }
                }
            }
        }
        const sub = Array.from(subSet).sort();
        for (const entry of sub) {
            allSubSet.add(entry);
        }
        result.push(sub);
    }
    result.unshift(Array.from(allSubSet).sort());
    return result;
}

class StaticFilter implements Filter {
    name: string;
    width: number;
    accessor: (data: { [key: string]: any }) => string;
    staticChoices: string[];

    constructor(
        name: string,
        width: number,
        accessor: (data: { [key: string]: any }) => string,
        datasets: Dataset[],
    ) {
        this.name = name;
        this.width = width;
        this.accessor = accessor;
        this.staticChoices = staticFilterChoices(datasets, accessor);
    }

    choices(selection: { [key: string]: number }) {
        return this.staticChoices;
    }

    counts(
        datasets: Dataset[],
        selection: { [key: string]: number },
    ): number[] {
        return this.staticChoices.map(choice => {
            let count = 0;
            for (const dataset of datasets) {
                if (this.accessor(dataset.data) === choice) {
                    ++count;
                }
            }
            return count;
        });
    }

    reactiveUpdate(
        selection: { [key: string]: number },
        newSelection: { [key: string]: number },
    ): number | null {
        return null;
    }

    filter(
        datasets: Dataset[],
        selection: { [key: string]: number },
    ): Dataset[] {
        if (selection[this.name] === 0) {
            return datasets;
        }
        const choice = this.staticChoices[selection[this.name] - 1];
        return datasets.filter(
            dataset => this.accessor(dataset.data) === choice,
        );
    }
}

class StaticFilterArray implements Filter {
    name: string;
    width: number;
    accessor: (data: { [key: string]: any }) => string[];
    staticChoices: string[];

    constructor(
        name: string,
        width: number,
        accessor: (data: { [key: string]: any }) => string[],
        datasets: Dataset[],
    ) {
        this.name = name;
        this.width = width;
        this.accessor = accessor;
        this.staticChoices = staticFilterArrayChoices(datasets, accessor);
    }

    choices(selection: { [key: string]: number }) {
        return this.staticChoices;
    }

    counts(
        datasets: Dataset[],
        selection: { [key: string]: number },
    ): number[] {
        return this.staticChoices.map(choice => {
            let count = 0;
            for (const dataset of datasets) {
                for (const entry of this.accessor(dataset.data)) {
                    if (entry === choice) {
                        ++count;
                        break;
                    }
                }
            }
            return count;
        });
    }

    reactiveUpdate(
        selection: { [key: string]: number },
        newSelection: { [key: string]: number },
    ): number | null {
        return null;
    }

    filter(
        datasets: Dataset[],
        selection: { [key: string]: number },
    ): Dataset[] {
        if (selection[this.name] === 0) {
            return datasets;
        }
        const choice = this.staticChoices[selection[this.name] - 1];
        return datasets.filter(dataset =>
            this.accessor(dataset.data).some(entry => entry === choice),
        );
    }
}

class DynamicFilterArray implements Filter {
    name: string;
    width: number;
    accessor: (data: { [key: string]: any }) => string[];
    driverName: string;
    driverAccessor: (data: { [key: string]: any }) => string;
    driverToChoices: string[][];

    constructor(
        name: string,
        width: number,
        accessor: (data: { [key: string]: any }) => string[],
        driverName: string,
        driverAccessor: (data: { [key: string]: any }) => string,
        datasets: Dataset[],
    ) {
        this.name = name;
        this.width = width;
        this.accessor = accessor;
        this.driverName = driverName;
        this.driverAccessor = driverAccessor;
        this.driverToChoices = dynamicFilterArrayChoices(
            datasets,
            driverAccessor,
            accessor,
        );
    }

    choices(selection: { [key: string]: number }) {
        return this.driverToChoices[selection[this.driverName]];
    }

    counts(
        datasets: Dataset[],
        selection: { [key: string]: number },
    ): number[] {
        return this.driverToChoices[selection[this.driverName]].map(choice => {
            let count = 0;
            for (const dataset of datasets) {
                const entries = this.accessor(dataset.data);
                if (entries != null) {
                    for (const entry of entries) {
                        if (entry === choice) {
                            ++count;
                            break;
                        }
                    }
                }
            }
            return count;
        });
    }

    reactiveUpdate(
        selection: { [key: string]: number },
        newSelection: { [key: string]: number },
    ): number | null {
        // selection[this.name] and newSelection[this.name] are guaranteed to be identical
        if (
            selection[this.name] === 0 ||
            selection[this.driverName] === newSelection[this.driverName]
        ) {
            return null;
        }
        const currentChoice =
            this.driverToChoices[selection[this.driverName]][
                selection[this.name] - 1
            ];
        const newChoices = this.driverToChoices[newSelection[this.driverName]];
        for (let index = 0; index < newChoices.length; ++index) {
            if (currentChoice === newChoices[index]) {
                return index + 1;
            }
        }
        return 0;
    }

    filter(
        datasets: Dataset[],
        selection: { [key: string]: number },
    ): Dataset[] {
        if (selection[this.name] === 0) {
            return datasets;
        }
        const choice =
            this.driverToChoices[selection[this.driverName]][
                selection[this.name] - 1
            ];
        return datasets.filter(dataset =>
            this.accessor(dataset.data).some(entry => entry === choice),
        );
    }
}

function optionalBoolean(value: boolean | null): string {
    if (value == null) {
        return "?";
    }
    return value ? "Yes" : "No";
}

function optionalBooleanTable(value: boolean | null): string {
    if (value == null) {
        return '<span style="color: #4F88B9; font-weight: bold">?</span>';
    }
    return value
        ? '<span style="color: #B4DEC6; font-weight: bold">&#10003;</span>'
        : '<span style="color: #874037; font-weight: bold">&#10007;</span>';
}

function optionalArray(values: string[], placeholder: string): string[] {
    if (values == null || values.length === 0) {
        return [placeholder];
    }
    return values;
}

const leadsWithDigit = /^[0-9].*$/;

export interface Column {
    type: "string" | "numerical" | "boolean";
    name: string;
    accessor: (data: { [key: string]: any }) => string;
    default: boolean;
}

export interface ArrayColumn {
    type: "stringArray" | "numericalArray";
    name: string;
    accessor: (data: { [key: string]: any }) => string[];
    default: boolean;
}

export function linkSuffix(link: { [key: string]: any }): string {
    return `(${link.type.replace(/_/g, " ")})`;
}

export function datasetLinkSuffix(link: { [key: string]: any }): string {
    return `(${link.name.toLowerCase()}${link.format == null ? "" : ", " + link.format.toLowerCase()})`;
}

export class Datasets {
    inner: Dataset[];
    filters: Filter[];
    yearsBounds: [number, number];
    columns: (Column | ArrayColumn)[];
    arrayColumnToNameToColor: Map<string, Map<string, string>>;
    linkSuffixToColor: Map<string, string>;
    datasetLinkSuffixToColor: Map<string, string>;

    constructor(datasets: Dataset[]) {
        this.inner = datasets.sort(
            (a, b) =>
                a.data.year - b.data.year ||
                a.data.name.localeCompare(b.data.name),
        );
        for (let index = 0; index < this.inner.length; ++index) {
            this.inner[index].index = index;
        }
        this.filters = [
            new StaticFilterArray(
                "Modality",
                50,
                data => data.modality,
                this.inner,
            ),
            new StaticFilter(
                "Category",
                150,
                data => data.category,
                this.inner,
            ),
            new DynamicFilterArray(
                "Subcategory",
                150,
                data => data.subcategory,
                "Category",
                data => data.category,
                this.inner,
            ),
            new StaticFilter("Task", 150, data => data.task, this.inner),
            new StaticFilterArray(
                "Sensor",
                100,
                data => optionalArray(data.sensors, "?"),
                this.inner,
            ),
            new StaticFilterArray(
                "Other sensor",
                100,
                data => optionalArray(data.other_sensors, "-"),
                this.inner,
            ),
            new StaticFilter(
                "Available online",
                30,
                data =>
                    optionalBoolean(data.dataset_properties?.available_online),
                this.inner,
            ),
            new StaticFilter(
                "Ground truth",
                30,
                data =>
                    optionalBoolean(data.dataset_properties?.has_ground_truth),
                this.inner,
            ),
            new StaticFilter(
                "Real data",
                30,
                data => optionalBoolean(data.dataset_properties?.has_real_data),
                this.inner,
            ),
            new StaticFilter(
                "Simulated data",
                30,
                data =>
                    optionalBoolean(
                        data.dataset_properties?.has_simulated_data,
                    ),
                this.inner,
            ),
            new StaticFilter(
                "Frames",
                30,
                data => optionalBoolean(data.dataset_properties?.has_frames),
                this.inner,
            ),
            new StaticFilter(
                "Biases",
                30,
                data => optionalBoolean(data.dataset_properties?.has_biases),
                this.inner,
            ),
            new StaticFilterArray(
                "Distribution",
                100,
                data =>
                    optionalArray(
                        data.dataset_properties?.distribution_methods,
                        "-",
                    ),
                this.inner,
            ),
            new StaticFilterArray(
                "Format",
                100,
                data =>
                    optionalArray(data.dataset_properties?.file_formats, "-"),
                this.inner,
            ),
        ];
        this.yearsBounds = this.inner.reduce(
            (bounds, dataset) => [
                Math.min(bounds[0], dataset.data.year),
                Math.max(bounds[0], dataset.data.year),
            ],
            [Infinity, -Infinity],
        );
        this.columns = [
            {
                type: "string",
                name: "Name",
                accessor: data => data.name,
                default: true,
            },
            {
                type: "stringArray",
                name: "Aliases",
                accessor: data => data.aliases,
                default: false,
            },
            {
                type: "string",
                name: "Full name",
                accessor: data => data.full_name,
                default: false,
            },
            {
                type: "string",
                name: "Modality",
                accessor: data => data.modality,
                default: false,
            },
            {
                type: "numerical",
                name: "Year",
                accessor: data => data.year,
                default: true,
            },
            {
                type: "stringArray",
                name: "Sensors",
                accessor: data => data.sensors,
                default: true,
            },
            {
                type: "stringArray",
                name: "Other sensors",
                accessor: data => data.other_sensors,
                default: false,
            },
            {
                type: "string",
                name: "Category",
                accessor: data => data.category,
                default: true,
            },
            {
                type: "stringArray",
                name: "Subcategories",
                accessor: data => data.subcategory,
                default: true,
            },
            {
                type: "string",
                name: "Task",
                accessor: data => data.task,
                default: false,
            },
            {
                type: "numericalArray",
                name: "Citations",
                accessor: data =>
                    data.citation_counts?.map(
                        citation => `${citation.count} (${citation.source})`,
                    ),
                default: false,
            },
            {
                type: "string",
                name: "Available online",
                accessor: data =>
                    optionalBooleanTable(
                        data.dataset_properties?.available_online,
                    ),
                default: true,
            },
            {
                type: "string",
                name: "Ground truth",
                accessor: data =>
                    optionalBooleanTable(
                        data.dataset_properties?.has_ground_truth,
                    ),
                default: false,
            },
            {
                type: "string",
                name: "Real data",
                accessor: data =>
                    optionalBooleanTable(
                        data.dataset_properties?.has_real_data,
                    ),
                default: false,
            },
            {
                type: "string",
                name: "Simulated data",
                accessor: data =>
                    optionalBooleanTable(
                        data.dataset_properties?.has_simulated_data,
                    ),
                default: false,
            },
            {
                type: "string",
                name: "Frames",
                accessor: data =>
                    optionalBooleanTable(data.dataset_properties?.has_frames),
                default: false,
            },
            {
                type: "string",
                name: "Biases",
                accessor: data =>
                    optionalBooleanTable(data.dataset_properties?.has_biases),
                default: false,
            },
            {
                type: "stringArray",
                name: "Related",
                accessor: data => data.connected_datasets,
                default: false,
            },
        ];
        const additionalFieldToType: Map<
            string,
            | "string"
            | "numerical"
            | "stringArray"
            | "numericalArray"
            | "boolean"
        > = new Map();
        for (const dataset of this.inner) {
            if (dataset.data.additional_metadata != null) {
                for (const [key, value] of Object.entries(
                    dataset.data.additional_metadata,
                )) {
                    let type:
                        | "string"
                        | "boolean"
                        | "numerical"
                        | "stringArray"
                        | "numericalArray"
                        | "unknownArray" = "string";
                    if (typeof value === "boolean") {
                        type = "boolean";
                    } else if (
                        typeof value === "number" ||
                        (typeof value === "string" &&
                            leadsWithDigit.test(value))
                    ) {
                        type = "numerical";
                    } else if (Array.isArray(value)) {
                        if (value.length === 0) {
                            type = "unknownArray";
                        } else if (
                            value.every(entry => typeof entry === "number")
                        ) {
                            type = "numericalArray";
                        } else {
                            type = "stringArray";
                        }
                    }
                    if (additionalFieldToType.has(key)) {
                        const existingType = additionalFieldToType.get(key);
                        if (type !== existingType) {
                            if (
                                type !== "unknownArray" ||
                                (existingType !== "stringArray" &&
                                    existingType !== "numericalArray")
                            ) {
                                additionalFieldToType.set(key, "string");
                            }
                        }
                    } else {
                        if (type !== "unknownArray") {
                            additionalFieldToType.set(key, type);
                        }
                    }
                }
            }
        }
        for (const [key, type] of Array.from(
            additionalFieldToType.entries(),
        ).sort()) {
            const name = key.replace(/_/g, " ");
            let accessor;
            if (type === "numericalArray" || type === "stringArray") {
                accessor = data =>
                    data.additional_metadata?.[key].map(value => `${value}`);
            } else if (type === "boolean") {
                accessor = data =>
                    optionalBooleanTable(data.additional_metadata?.[key]);
            } else {
                accessor = data => `${data.additional_metadata?.[key] ?? ""}`;
            }
            this.columns.push({
                type,
                name: `${name.charAt(0).toUpperCase()}${name.slice(1)}`,
                accessor,
                default: false,
            });
        }
        this.columns.push({
            type: "stringArray",
            name: "Distribution",
            accessor: data => data.dataset_properties?.distribution_methods,
            default: true,
        });
        this.columns.push({
            type: "stringArray",
            name: "Format",
            accessor: data => data.dataset_properties?.file_formats,
            default: true,
        });
        this.arrayColumnToNameToColor = new Map();
        for (const column of this.columns) {
            if (
                column.type === "numericalArray" ||
                column.type === "stringArray"
            ) {
                const namesSet: Set<string> = new Set();
                for (const dataset of this.inner) {
                    const names = column.accessor(dataset.data);
                    if (names != null) {
                        for (const name of column.accessor(dataset.data)) {
                            namesSet.add(name);
                        }
                    }
                }
                const names = Array.from(namesSet);
                if (column.type === "stringArray") {
                    names.sort();
                } else {
                    names.sort((a, b) => parseFloat(a) - parseFloat(b));
                }
                const colormap =
                    column.type === "stringArray"
                        ? colormaps.ROMAO.slice(20, 236)
                        : colormaps.ROMAO.slice(128, 236).reverse();
                this.arrayColumnToNameToColor.set(
                    column.name,
                    new Map(
                        names.map((name, index) => [
                            name,
                            colormaps.rgbToHex(
                                colormap[
                                    Math.floor(
                                        (index / names.length) *
                                            colormap.length,
                                    )
                                ],
                            ),
                        ]),
                    ),
                );
            }
        }
        const linkSuffixesSet: Set<string> = new Set();
        const datasetLinkSuffixesSet: Set<string> = new Set();
        for (const dataset of this.inner) {
            if (dataset.data.links != null) {
                for (const link of dataset.data.links) {
                    linkSuffixesSet.add(linkSuffix(link));
                }
            }
            if (dataset.data.dataset_properties?.dataset_links != null) {
                for (const datasetLink of dataset.data.dataset_properties
                    .dataset_links) {
                    datasetLinkSuffixesSet.add(datasetLinkSuffix(datasetLink));
                }
            }
        }
        const linksColormap = colormaps.ROMAO.slice(30, 108);
        const datasetLinksColormap = colormaps.ROMAO.slice(148, 226).reverse();
        const linkSuffixes = Array.from(linkSuffixesSet).sort();
        const datasetLinkSuffixes = Array.from(datasetLinkSuffixesSet).sort();
        this.linkSuffixToColor = new Map(
            linkSuffixes.map((linkSuffix, index) => [
                linkSuffix,
                colormaps.rgbToHex(
                    linksColormap[
                        Math.floor(
                            (index / linkSuffixes.length) *
                                linksColormap.length,
                        )
                    ],
                ),
            ]),
        );
        this.datasetLinkSuffixToColor = new Map(
            datasetLinkSuffixes.map((datasetLinkSuffix, index) => [
                datasetLinkSuffix,
                colormaps.rgbToHex(
                    datasetLinksColormap[
                        Math.floor(
                            (index / datasetLinkSuffixes.length) *
                                datasetLinksColormap.length,
                        )
                    ],
                ),
            ]),
        );
    }
}
