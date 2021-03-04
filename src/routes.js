const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserController");
const MovieController = require("./controllers/MovieController");

const RentController = require("./controllers/RentController");

routes.post("/users", UserController.store);

routes.post("/movies", MovieController.store);


routes.post("/rent/:movie_id", RentController.store);



module.exports = routes;