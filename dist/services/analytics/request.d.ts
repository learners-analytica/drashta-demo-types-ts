export declare namespace Analytics_Requests {
    namespace POST {
        type RequestTrainAutoML = {
            table: string;
            columns: string;
            target: string;
            time_limit: string;
            model_name: string;
            train_split: string;
            val_split: string;
            test_split: string;
        };
        type RequestPredictDataOnModel = {
            model_id: string;
            table: string;
            columns: string;
        };
    }
}
