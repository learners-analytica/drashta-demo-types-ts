import type { TableStructure,DataSeries } from "../../data"
export namespace Bridge_Response {
    export namespace POST {
        export type requestDataStructure = {
            structure:TableStructure[]
        }
    }

    export namespace GET {
        export type requestData = {
            data:DataSeries[]
        }
    }
}
