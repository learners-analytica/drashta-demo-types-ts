import { pingResponse } from "./base"
import { DataSeries,TableStructure } from "./data"
export type ResponsePOSTTableData = pingResponse & {
    table : DataSeries[]
}

export type ResponsePOSTDatabaseSchema = pingResponse & {
    tableSchema : TableStructure[]
}

