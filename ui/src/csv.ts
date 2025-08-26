import type { Dataset } from "./dataset";

import { Datasets } from "./dataset";

export function datasetsToCsv(
    datasets: Datasets,
    selectedDatasets: Dataset[],
): string {
    let csvData = `${datasets.columns.map(column => column.name).join(",")}\n`;
    for (const dataset of selectedDatasets) {
        csvData += `${datasets.columns
            .map(column => {
                const escape = value => {
                    value = value.toString().replace(/"/g, '""');
                    if (value.includes(",")) {
                        value = `"${value}"`;
                    }
                    return value;
                };
                if (column.type === "boolean") {
                    const value = column.accessor(dataset.data);
                    if (value.endsWith("&#10003;</span>")) {
                        return "yes";
                    }
                    if (value.endsWith("&#10007;</span>")) {
                        return "no";
                    }
                    return "?";
                }
                if (
                    column.type === "numericalArray" ||
                    column.type === "stringArray"
                ) {
                    const array = column.accessor(dataset.data);
                    if (array == null) {
                        return "";
                    }
                    return escape(column.accessor(dataset.data).join(":"));
                }
                return escape(column.accessor(dataset.data));
            })
            .join(",")}\n`;
    }
    return csvData;
}
