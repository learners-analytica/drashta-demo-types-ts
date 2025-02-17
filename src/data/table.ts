import type { TDataSeries, TDataSeriesHead, TDataSeriesRaw } from "./dataSeries";

export type TTableHead = {
    tableName:string,
}

export type TTableStructure = TTableHead & {
    tableColumnsHeadData : TDataSeriesHead[],
}

export type TTableMetaData = TTableHead & {
    tableColumnsData : TDataSeries[],
}

export type TTableRawData = TTableHead & {
    tableColumnsData : TDataSeriesRaw[],
}