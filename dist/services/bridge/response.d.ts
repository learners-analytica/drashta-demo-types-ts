import type { TTableStructure, TDataSeries } from "../../data";
export declare namespace Bridge_Response {
    namespace POST {
        type requestDataStructure = {
            structure: TTableStructure[];
        };
    }
    namespace GET {
        type requestData = {
            data: TDataSeries[];
        };
    }
}
