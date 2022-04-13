const UserRoute = require("./users");
const JobsRoute = require("./jobs");
const loginRoute = require("./login");

const route = require("express").Router();

route.use("/login", loginRoute);
route.use("/user", UserRoute);
route.use("/jobs", JobsRoute);

module.exports = route;
