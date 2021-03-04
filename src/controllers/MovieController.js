const Movie = require("../models/Movie");
const { Op } = require("sequelize");

const moviesAvaliable = async (req, res) => {
  try {
    const movies = await Movie.findAll({
      where: {
        quantity: {
          [Op.gt]: 0,
        },
      },
    });

    return res.json(movies);
  } catch (err) {
    res.status(500).json(err);
  }
};

const storeMovie = async (req, res) => {
  try {
    const { title, director, quantity } = req.body;

    const movie = await Movie.create({ title, director, quantity });

    return res.json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
};

const searchMovieByTitle = async (req, res) => {
  try {
    const { title } = req.body;

    const movies = await Movie.findAll({
      limit: 10,
      where: {
        title: {
          [Op.like]: "%" + title  + "%",
        },
      },
    });

    return res.json(movies);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { storeMovie, moviesAvaliable, searchMovieByTitle };
