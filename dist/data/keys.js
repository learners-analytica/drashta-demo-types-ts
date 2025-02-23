"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MLTaskTypes = exports.AggregationOperations = void 0;
var AggregationOperations;
(function (AggregationOperations) {
    AggregationOperations["SUM"] = "sum";
    AggregationOperations["COUNT"] = "count";
    AggregationOperations["MAX"] = "max";
    AggregationOperations["MIN"] = "min";
    AggregationOperations["AVG"] = "avg";
})(AggregationOperations || (exports.AggregationOperations = AggregationOperations = {}));
var MLTaskTypes;
(function (MLTaskTypes) {
    MLTaskTypes["CLASSIFICATION"] = "classification";
    MLTaskTypes["REGRESSION"] = "regression";
    MLTaskTypes["TS_FORECAST"] = "ts_forecast";
    MLTaskTypes["RANK"] = "rank";
    MLTaskTypes["SEQ_CLASSIFICATION"] = "seq-classification";
    MLTaskTypes["SEQ_REGRESSION"] = "seq-regression";
    MLTaskTypes["SUMMARIZATION"] = "summarization";
})(MLTaskTypes || (exports.MLTaskTypes = MLTaskTypes = {}));
