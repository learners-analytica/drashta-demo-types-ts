import type { TTableStructure, TColumnStructureData } from "../../data";
export declare namespace Bridge_Response {
    namespace POST {
        type requestDataStructure = {
            structure: TTableStructure[];
        };
    }
    namespace GET {
        type requestData = {
            data: TColumnStructureData[];
        };
    }
}
