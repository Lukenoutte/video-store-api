const express = require("express");
const router = express.Router();

const { authMiddleware, guest} = require("./middlewares/auth");

const UserController = require("./controllers/UserController");
const MovieController = require("./controllers/MovieController");
const RentController = require("./controllers/RentController");

router.post("/users", guest, UserController.createUser);
router.post("/users/login", guest, UserController.login);


router.post("/movies", authMiddleware, MovieController.storeMovie);
router.get("/movies", MovieController.moviesAvaliable);
router.get("/movies/search", MovieController.searchMovieByTitle);

router.post("/rents", authMiddleware, RentController.rentMovie);
router.patch("/rents/give-back/:rentId", authMiddleware, RentController.giveBackMovie);

module.exports = router;
