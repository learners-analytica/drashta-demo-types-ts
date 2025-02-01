export * from "./services";
export type DataSeries = {
    readonly seriesName: string;
    readonly seriesType: string;
    readonly seriesData: readonly (number | boolean | string)[];
};
type TableColumnEntry = {
    readonly columnName: string;
    readonly columnType: string;
};
export type TableStructure = {
    tableName: string;
    tableColumns: readonly TableColumnEntry[];
};
