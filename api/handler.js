"use strict";

let user = require("./lib/user");

module.exports.getAllUsers = (event, context, callback) => {
  user.getAllUsers(event, callback);
};

module.exports.createUser = (event, context, callback) => {
  user.createUser(event, callback);
};

module.exports.updateUser = (event, context, callback) => {
  user.updateUser(event, callback);
};

module.exports.updateUserStatus = (event, context, callback) => {
  user.updateUserStatus(event, callback);
};

module.exports.deleteUser = (event, context, callback) => {
  user.deleteUser(event, callback);
};
