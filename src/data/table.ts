import type { TDataSeries, TDataSeriesHead, TDataArray, TDataSeriesMetadata } from "./dataSeries";

export type TTableHead = {
    table_name:string,
}

export type TTableStructure = TTableHead & {
    table_column_head_data : TDataSeriesHead[],
}

export type TTableData = TTableHead & TDataSeriesMetadata & {
    table_data_series : TDataSeries[],
}

export type TTableRawData = TTableHead & {
    table_data_series : TDataArray[],
}