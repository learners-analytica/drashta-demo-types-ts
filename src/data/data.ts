export type TDataSeries = {
    readonly series_name: string,
    readonly series_type: string
    readonly series_data: readonly unknown[],
}

type TTableColumnEntry = {
    readonly column_name : string,
    readonly column_type : string
}

export type TTableStructure = {
    table_name : string,
    table_columns : readonly TTableColumnEntry[],
}
