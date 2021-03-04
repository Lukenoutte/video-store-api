const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserController");
const MovieController = require("./controllers/MovieController");

const RentController = require("./controllers/RentController");

routes.post("/users", UserController.storeUser);

routes.post("/movies", MovieController.storeMovie);
routes.get("/movies", MovieController.moviesAvaliable);
routes.post("/movies/search", MovieController.searchMovieByTitle);

routes.post("/rent", RentController.rentMovie);
routes.post("/rent/give-back", RentController.giveBackMovie);



module.exports = routes;