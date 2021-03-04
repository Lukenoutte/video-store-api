const Movie = require("../models/Movie");

module.exports = {
  async store(req, res) {
    try {
      const { title, director, quantity } = req.body;

      const movie = await Movie.create({ title, director, quantity });

      return res.json(movie);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
