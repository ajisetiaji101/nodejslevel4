const { LoginController } = require("../controller/index");

const route = require("express").Router();

route.post("/", LoginController.login);

module.exports = route;
