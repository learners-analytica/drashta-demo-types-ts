import type { ChartDataset, BubbleDataPoint, Point } from "chart.js";
export * from "./services";
export type DataSeries = {
    readonly seriesName: string;
    readonly seriesType: string;
    readonly seriesData: readonly (number | [number, number] | Point | BubbleDataPoint | null)[];
};
type TableColumnEntry = {
    readonly columnName: string;
    readonly columnType: string;
};
export type TableStructure = {
    tableName: string;
    tableColumns: readonly TableColumnEntry[];
};
