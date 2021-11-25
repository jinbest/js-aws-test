"use strict";

var helper = require("./helper"),
  response = require("./response");

module.exports.getAllUsers = (event, cb) => {
  helper
    .getAllUsers()
    .then((users) => {
      cb(
        null,
        response.create(200, {
          result: users,
        })
      );
    })
    .catch((err) => {
      cb(
        null,
        response.create(500, {
          err: err,
        })
      );
    });
};

module.exports.createUser = (event, cb) => {
  helper
    .createUser(JSON.parse(event.body))
    .then((result) => {
      cb(null, response.create(201, {}));
    })
    .catch((err) => {
      cb(
        null,
        response.create(500, {
          err: err,
        })
      );
    });
};

module.exports.updateUser = (event, cb) => {
  helper
    .updateTodo(JSON.parse(event.body))
    .then((result) => {
      cb(null, response.create(200, {}));
    })
    .catch((err) => {
      cb(
        null,
        response.create(500, {
          err: err,
        })
      );
    });
};

module.exports.deleteUser = (event, cb) => {
  helper
    .deleteUser(event.pathParameters)
    .then((result) => {
      cb(null, response.create(200, {}));
    })
    .catch((err) => {
      cb(
        null,
        response.create(500, {
          err: err,
        })
      );
    });
};
