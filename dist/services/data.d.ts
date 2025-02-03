export type DataSeries = {
    readonly seriesName: string;
    readonly seriesType: string;
    readonly seriesData: readonly unknown[];
};
type TableColumnEntry = {
    readonly columnName: string;
    readonly columnType: string;
};
export type TableStructure = {
    tableName: string;
    tableColumns: readonly TableColumnEntry[];
};
export {};
