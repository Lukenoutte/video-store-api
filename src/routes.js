const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserController");
const MovieController = require("./controllers/MovieController");

routes.post("/users", UserController.store);

routes.post("/movies", MovieController.store);



module.exports = routes;