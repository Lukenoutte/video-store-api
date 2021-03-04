const Rent = require("../models/Rent");
const User = require("../models/User");
const Movie = require("../models/Movie");

const rentMovie = async (req, res) => {
  try {
    const { user_id, movie_id } = req.body;

    const user = await User.findByPk(user_id);
    const movie = await Movie.findByPk(movie_id);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    if (!movie) {
      return res.status(400).json({ error: "Movie not found" });
    }

    if (movie.quantity > 0) {
      movie.quantity--;
      const rent = await Rent.create({ movie_id, user_id });
      await movie.save();

      return res.json(rent);
    } else {
      return res.status(400).json({ error: "Movie not avaliable" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const giveBackMovie = async (req, res) => {
  try {
    const { rent_id } = req.body;
    const rent = await Rent.findByPk(rent_id);
    const movie = await Movie.findByPk(rent.movie_id);
    movie.quantity++;
    await movie.save();
    await rent.destroy();
    
    res.send();
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  rentMovie,
  giveBackMovie,
};
