const Rent = require("../models/Rent");
const User = require("../models/User");
const Movie = require("../models/Movie");

const rentMovie = async (req, res) => {
  try {
    const { user_id, movie_id } = req.body;
    const user = await User.findByPk(user_id);
    const movie = await Movie.findByPk(movie_id);
    if (!user) return res.status(400).json({ error: "User not found." });
    if (!movie) return res.status(400).json({ error: "Movie not found." });
    if (movie.quantity <= 0) return res.status(400).json({ error: "Movie not avaliable." });
    movie.quantity--;
    const rent = await Rent.create({ movie_id, user_id });
    await movie.save();
    return res.json(rent);
  } catch (err) {
    res.status(500).send({ error: "Error on rent a movie." });
  }
};

const giveBackMovie = async (req, res) => {
  try {
    const rent_id = req.params.rentId;
    const rent = await Rent.findByPk(rent_id);

    if (!rent) return res.status(400).send({ error: "This rent don't exist." });
    if (rent.returned)
      return res
        .status(400)
        .send({ error: `Rent id ${rent_id} has already been returned.` });

    const movie = await Movie.findByPk(rent.movie_id);
    movie.quantity++;
    await movie.save();
    rent.returned = true;
    await rent.save();
    res.send({ message: `You returned the movie with id ${rent_id}.` });
  } catch (err) {
    res.status(500).send({ error: "Error on give back a movie." });
  }
};

module.exports = {
  rentMovie,
  giveBackMovie,
};
