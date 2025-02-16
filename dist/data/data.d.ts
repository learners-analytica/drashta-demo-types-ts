export type TDataArray = unknown[];
export type TColumnStructureHead = {
    column_name: string;
    column_type: string;
    column_is_key: boolean;
};
export type TColumnStructureMeta = TColumnStructureHead & {
    column_data_preview: TDataArray;
    column_min: number;
    column_max: number;
    column_count: number;
    column_mean: number;
};
export type TColumnStructureData = TColumnStructureMeta & {
    column_data: TDataArray;
};
export type TTableStructure = {
    table_name: string;
    table_columns: readonly TColumnStructureHead[];
};
export type TTableData = {
    table_name: string;
    table_columns_data: readonly TColumnStructureData[];
};
