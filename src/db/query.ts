import { ChartDataset } from "chart.js";

export interface DatasetQueryOutput {
    label: string;
    datasets: ChartDataset[]
}

export interface DatasetColumnRequest {
    columns:string[];
}