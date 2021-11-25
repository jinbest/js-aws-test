"use strict";

const Promise = require("bluebird");
const AWS = require("aws-sdk");

var dynamodbOfflineOptions = {
    region: "localhost",
    endpoint: "http://localhost:8000",
    accessKeyId: "DEFAULT_ACCESS_KEY", // needed if you don't have aws credentials at all in env
    secretAccessKey: "DEFAULT_SECRET", // needed if you don't have aws credentials at all in env
  },
  isOffline = () => process.env.IS_OFFLINE;

var client = isOffline()
  ? new AWS.DynamoDB.DocumentClient(dynamodbOfflineOptions)
  : new AWS.DynamoDB.DocumentClient();

module.exports = (method, params) => {
  return Promise.fromCallback((cb) => client[method](params, cb));
};
