export type TDataSeries = {
    readonly series_name: string;
    readonly series_type: string;
    readonly series_data: readonly unknown[];
    readonly series_mean: number;
    readonly series_count: number;
    readonly is_series_key: boolean;
};
export type TTableColumnEntry = {
    readonly column_name: string;
    readonly column_type: string;
    readonly column_is_key: string;
};
export type TTableStructure = {
    table_name: string;
    table_columns: readonly TTableColumnEntry[];
};
