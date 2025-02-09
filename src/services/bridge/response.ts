import type { TTableStructure,TDataSeries } from "../../data"
export namespace Bridge_Response {
    export namespace POST {
        export type requestDataStructure = {
            structure:TTableStructure[]
        }
    }

    export namespace GET {
        export type requestData = {
            data:TDataSeries[]
        }
    }
}
