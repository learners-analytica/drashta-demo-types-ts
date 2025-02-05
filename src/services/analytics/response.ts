export namespace POST {
    export type responseTrainAutoML = {
        model_id : string,
        model_name : string,
        model_file_path:string,
        model_target:string,
        model_task_type:string,
        model_eval_metric:string
    }
}