const express = require("express");
const routes = express.Router();

const { authMiddleware, guest} = require("./middlewares/auth");

const UserController = require("./controllers/UserController");
const MovieController = require("./controllers/MovieController");
const RentController = require("./controllers/RentController");

routes.post("/users", guest, UserController.createUser);
routes.post("/users/login", guest, UserController.login);


routes.post("/movies", authMiddleware, MovieController.storeMovie);
routes.get("/movies", MovieController.moviesAvaliable);
routes.post("/movies/search", MovieController.searchMovieByTitle);

routes.post("/rents", authMiddleware, RentController.rentMovie);
routes.post("/rents/give-back", authMiddleware, RentController.giveBackMovie);

module.exports = routes;
