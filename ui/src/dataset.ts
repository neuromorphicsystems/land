export interface Dataset {
    data: {
        [key: string]: any;
    };
    html: string;
    urlName: string;
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
    filter: [string, boolean] | null;
}

export interface ArrayColumn {
    type: "stringArray" | "numericalArray";
    name: string;
    accessor: (data: { [key: string]: any }) => string[];
    default: boolean;
    filter: [string, boolean] | null;
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
    advancedFilters: Filter[];
    yearsBounds: [number, number];
    columns: (Column | ArrayColumn)[];
    keyToNameToColor: {
        [key: string]: {
            [key: string]: string;
        };
    };
    constructor(data: {
        datasets: Dataset[];
        keyToNameToColor: {
            [key: string]: {
                [key: string]: string;
            };
        };
    }) {
        this.inner = data.datasets.sort(
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
                data => data.modalities,
                this.inner,
            ),
            new StaticFilter(
                "Category",
                150,
                data => data.category,
                this.inner,
            ),
            new DynamicFilterArray(
                "Tag",
                150,
                data => data.tags,
                "Category",
                data => data.category,
                this.inner,
            ),
        ];
        this.advancedFilters = [
            ...this.filters,
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
                40,
                data =>
                    optionalBoolean(data.dataset_properties?.available_online),
                this.inner,
            ),
            new StaticFilter(
                "Ground truth",
                40,
                data =>
                    optionalBoolean(data.dataset_properties?.has_ground_truth),
                this.inner,
            ),
            new StaticFilter(
                "Real data",
                40,
                data => optionalBoolean(data.dataset_properties?.has_real_data),
                this.inner,
            ),
            new StaticFilter(
                "Simulated data",
                40,
                data =>
                    optionalBoolean(
                        data.dataset_properties?.has_simulated_data,
                    ),
                this.inner,
            ),
            new StaticFilter(
                "Frames",
                40,
                data => optionalBoolean(data.dataset_properties?.has_frames),
                this.inner,
            ),
            new StaticFilter(
                "Biases",
                40,
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
                filter: null,
            },
            {
                type: "numerical",
                name: "Year",
                accessor: data => data.year,
                default: true,
                filter: null,
            },
            {
                type: "string",
                name: "Description",
                accessor: data => data.description,
                default: true,
                filter: null,
            },
            {
                type: "stringArray",
                name: "Modalities",
                accessor: data => data.modalities,
                default: true,
                filter: ["Modality", false],
            },
            {
                type: "string",
                name: "Category",
                accessor: data => data.category,
                default: true,
                filter: ["Category", false],
            },
            {
                type: "stringArray",
                name: "Tags",
                accessor: data => data.tags,
                default: true,
                filter: ["Tag", false],
            },
            {
                type: "stringArray",
                name: "Aliases",
                accessor: data => data.aliases,
                default: false,
                filter: null,
            },
            {
                type: "string",
                name: "Full name",
                accessor: data => data.full_name,
                default: false,
                filter: null,
            },
            {
                type: "stringArray",
                name: "Sensors",
                accessor: data => data.sensors,
                default: false,
                filter: ["Sensor", true],
            },
            {
                type: "stringArray",
                name: "Other sensors",
                accessor: data => data.other_sensors,
                default: false,
                filter: ["Other sensor", true],
            },
            {
                type: "numericalArray",
                name: "Citations",
                accessor: data =>
                    data.citation_counts?.map(
                        citation => `${citation.count} (${citation.source})`,
                    ),
                default: false,
                filter: null,
            },
            {
                type: "boolean",
                name: "Available online",
                accessor: data =>
                    optionalBooleanTable(
                        data.dataset_properties?.available_online,
                    ),
                default: false,
                filter: ["Available online", true],
            },
            {
                type: "boolean",
                name: "Ground truth",
                accessor: data =>
                    optionalBooleanTable(
                        data.dataset_properties?.has_ground_truth,
                    ),
                default: false,
                filter: ["Ground truth", true],
            },
            {
                type: "boolean",
                name: "Real data",
                accessor: data =>
                    optionalBooleanTable(
                        data.dataset_properties?.has_real_data,
                    ),
                default: false,
                filter: ["Real data", true],
            },
            {
                type: "boolean",
                name: "Simulated data",
                accessor: data =>
                    optionalBooleanTable(
                        data.dataset_properties?.has_simulated_data,
                    ),
                default: false,
                filter: ["Simulated data", true],
            },
            {
                type: "boolean",
                name: "Frames",
                accessor: data =>
                    optionalBooleanTable(data.dataset_properties?.has_frames),
                default: false,
                filter: ["Frames", true],
            },
            {
                type: "boolean",
                name: "Biases",
                accessor: data =>
                    optionalBooleanTable(data.dataset_properties?.has_biases),
                default: false,
                filter: ["Biases", true],
            },
            {
                type: "stringArray",
                name: "Related",
                accessor: data => data.connected_datasets,
                default: false,
                filter: null,
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
            const lowercaseName = key.replace(/_/g, " ");
            const name = `${lowercaseName.charAt(0).toUpperCase()}${lowercaseName.slice(1)}`;
            if (type === "numericalArray" || type === "stringArray") {
                this.columns.push({
                    type,
                    name,
                    accessor: data =>
                        data.additional_metadata?.[key].map(
                            value => `${value}`,
                        ),
                    default: false,
                    filter: null,
                });
            } else {
                if (type === "boolean") {
                    this.columns.push({
                        type,
                        name: `${name.charAt(0).toUpperCase()}${name.slice(1)}`,
                        accessor: data =>
                            optionalBooleanTable(
                                data.additional_metadata?.[key],
                            ),
                        default: false,
                        filter: null,
                    });
                } else {
                    this.columns.push({
                        type,
                        name: `${name.charAt(0).toUpperCase()}${name.slice(1)}`,
                        accessor: data =>
                            `${data.additional_metadata?.[key] ?? ""}`,
                        default: false,
                        filter: null,
                    });
                }
            }
        }
        this.columns.push({
            type: "stringArray",
            name: "Distribution",
            accessor: data => data.dataset_properties?.distribution_methods,
            default: false,
            filter: ["Distribution", true],
        });
        this.columns.push({
            type: "stringArray",
            name: "Format",
            accessor: data => data.dataset_properties?.file_formats,
            default: false,
            filter: ["Format", true],
        });
        this.keyToNameToColor = data.keyToNameToColor;
        for (const column of this.columns) {
            if (
                column.filter != null &&
                column.type != "boolean" &&
                !this.keyToNameToColor.hasOwnProperty(column.name)
            ) {
                throw new Error(
                    `the column \"${column.name}\" has a filter but it is not listed in generateKeyToNameToColor (data.js)`,
                );
            }
        }
        for (const key of Object.keys(this.keyToNameToColor)) {
            let found = false;
            for (const column of this.columns) {
                if (
                    column.filter != null &&
                    column.name === key &&
                    column.type !== "boolean"
                ) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                throw new Error(
                    `\"${key}\" listed in generateKeyToNameToColor (data.js) has no column`,
                );
            }
        }
    }
}
