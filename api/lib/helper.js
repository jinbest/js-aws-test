"use strict";

var Promise = require("bluebird"),
  db = require("../database/dynamodb");
const { v4 } = require("uuid");

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
  const id = v4();
  return db("put", {
    TableName: tableName,
    Item: {
      id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });
}

function updateUser(data) {
  const { id, user } = data;
  console.log("user:-----> ", user);
  console.log("id: ", id);
  return db("update", {
    TableName: tableName,
    Key: {
      id: id,
    },
    UpdateExpression:
      "set email = :email, firstName = :firstName, lastName = :lastName",
    ExpressionAttributeValues: {
      ":email": user.email,
      ":firstName": user.firstName,
      ":lastName": user.lastName,
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
