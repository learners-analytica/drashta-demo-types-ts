import type { BubbleDataPoint, Point } from "chart.js";

type TDataArray = unknown[]

export type TDataSeriesHead = {
    seriesName : string,
    seriesType : string,
}

export type TDataSeriesMetadata = {
    seriesAvg : number,
    seriesMin : number,
    seriesMax : number,
    seriesCount : number,
}

export type TDataSeriesRaw = TDataSeriesHead & {
    seriesData : TDataArray,
}

export type TDataSeries = TDataSeriesRaw & TDataSeriesMetadata

