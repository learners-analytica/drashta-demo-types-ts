export type TDataArray = unknown[];
export type TColumnNames = string[];
export type TDataSeriesHead = {
    column_name: string;
    column_type: string;
    column_is_key: boolean;
};
export type TDataSeriesMetadata = {
    column_avg: number;
    column_min: number;
    column_max: number;
    column_count: number;
};
export type TDataSeriesRaw = TDataSeriesHead & {
    column_data: TDataArray;
};
export type TDataSeries = TDataSeriesRaw & TDataSeriesMetadata;
