import type { TableStructure, DataSeries } from "../../data";
export declare namespace Bridge_Response {
    namespace POST {
        type requestDataStructure = {
            structure: TableStructure[];
        };
    }
    namespace GET {
        type requestData = {
            data: DataSeries[];
        };
    }
}
