import { MLTaskTypes } from "./keys"
import { TDataSeriesMinimal } from "./dataSeries"
export type TModelMetadata = {
    id:string,
    name: string,
    estimator:string,
    task:MLTaskTypes,
    date:string,
    columns:TDataSeriesMinimal[],
    target:string
}