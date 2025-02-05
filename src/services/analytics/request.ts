export namespace Analytics_Requests {
    export namespace POST {
        export type RequestTrainAutoML = {
            table: string;
            columns: string;
            target: string;
            time_limit: string;
            model_name: string;
            train_split: string;
            val_split: string;
            test_split: string;
        };

        export type RequestPredictDataOnModel = {
            model_id: string;
            table: string;
            columns: string;
        };
    }
}

