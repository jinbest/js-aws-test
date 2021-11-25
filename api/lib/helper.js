"use strict";

var Promise = require("bluebird"),
  db = require("../database/dynamodb");

const DB_PREFIX = process.env.IS_OFFLINE ? "dev" : process.env.DB_PREFIX;
const tableName = DB_PREFIX + "-users";

function getUser(id) {
  return db("query", {
    TableName: tableName,
    KeyConditionExpression: "#id = :id",
    ExpressionAttributeValues: {
      ":id": id,
    },
    ExpressionAttributeNames: {
      "#id": "id",
    },
  });
}

function getAllUsers() {
  return db("scan", {
    TableName: tableName,
  });
}

function createUser(user) {
  const { email } = user;
  return db("put", {
    TableName: tableName,
    KeyConditionExpression: "#email = :email",
    ExpressionAttributeValues: {
      ":email": email,
    },
    ExpressionAttributeNames: {
      "#email": "email",
    },
    Item: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });
}

function updateUser(user) {
  return db("update", {
    TableName: tableName,
    Key: {
      id: user.id,
    },
    UpdateExpression: "set email = :email",
    ExpressionAttributeValues: {
      ":email": user.email,
    },
  });
}

function deleteUser(params) {
  return db("delete", {
    TableName: tableName,
    Key: {
      id: params.id,
    },
  });
}

module.exports = {
  getUser,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
