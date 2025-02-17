import type { TDataSeries, TDataSeriesHead, TDataSeriesRaw, TDataSeriesMetadata } from "./dataSeries";
export type TTableHead = {
    table_name: string;
};
export type TTableStructure = TTableHead & {
    table_column_head_data: TDataSeriesHead[];
};
export type TTableMetaData = TTableHead & TDataSeriesMetadata & {
    table_data_series: TDataSeries[];
};
export type TTableRawData = TTableHead & {
    table_data_series: TDataSeriesRaw[];
};
