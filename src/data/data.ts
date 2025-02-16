
type TDataPreviewTuple = [unknown,unknown,unknown,unknown,unknown]
type TDataArray = unknown[]


/**
 * @deprecated This type is deprecated. Use `TColumnDataSeries` instead.
 */
export type TDataSeries = {
    readonly series_name: string;
    readonly series_type: string;
    readonly series_data: readonly unknown[];
    readonly series_mean: number;
    readonly series_count: number;
    readonly is_series_key: boolean;
}

/**
 * @deprecated This type is deprecated. Use `TColumnStructure` instead.
 */
export type TTableColumnEntry = {
    readonly column_name: string;
    readonly column_type: string;
    readonly column_is_key: string;
}

export type TColumnStructure = {
    column_name : string,
    column_type : string,
    column_is_key : boolean;
    column_data_preview : TDataPreviewTuple
    column_min : number
    column_max : number
    column_count : number
    column_mean : number
}

export type TColumnDataSeries = TColumnStructure & {
    column_data : TDataArray
}

export type TTableStructure = {
    table_name: string;
    table_columns: readonly TColumnStructure[];
}
