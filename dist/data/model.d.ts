import { MLTaskTypes } from "./keys";
export type TModelMetadata = {
    id: string;
    name: string;
    estimator: string;
    task: MLTaskTypes;
    date: string;
    data: string[];
    target: string;
};
