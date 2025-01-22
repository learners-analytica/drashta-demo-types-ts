import { ChartDataset } from "chart.js";

export interface DatasetQueryOutput {
    label: string;
    datasets: ChartDataset[]
}

interface DatasetColumnRequest {
    columns:string[];
}