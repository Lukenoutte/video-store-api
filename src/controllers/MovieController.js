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
    res.status(500).send({ error: "Error on get avaliable movies." });
  }
};

const storeMovie = async (req, res) => {
  try {
    const { title, director, quantity } = req.body;

    await Movie.findOrCreate({
      where: {
        title: { [Op.iLike]: title },
      },
      defaults: { title, director, quantity },
    }).then(function (result) {
      var movie = result[0],
        created = result[1];

      if (!created) {
        return res.status(400).send({ error: "Movie already exists" });
      }

      res.json(movie);
    });
  } catch (err) {
    res.status(500).send({ error: "Error on store a new movie." });
  }
};

const searchMovieByTitle = async (req, res) => {
  try {
    const { title } = req.body;

    const movies = await Movie.findAll({
      where: {
        title: {
          [Op.iLike]: "%" + title + "%",
        },
      },
    });

    if (!movies || movies.length === 0) {
      return res.json({ message: "No movie found." });
    }

    return res.json(movies);
  } catch (err) {
    res.status(500).send({ error: "Error on search a movie by title." });
  }
};

module.exports = { storeMovie, moviesAvaliable, searchMovieByTitle };
