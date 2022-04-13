const { UsersController } = require("../controller/index");

const route = require("express").Router();

route.get("/", UsersController.getUsers);
route.get("/:id", UsersController.getUser);

module.exports = route;
