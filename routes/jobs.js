const { JobsController } = require("../controller/index");
const authentication = require("../middleware/authentication");

const route = require("express").Router();

route.use(authentication);
route.get("/search", JobsController.searchJobs);
route.get("/", JobsController.getlistJobs);
route.get("/:id", JobsController.getJob);

module.exports = route;
