const Movie = require("../models/Movie");

module.exports = {
  async store(req, res) {
    try {
      const { title, director } = req.body;

      const movie = await Movie.create({ title, director });

      return res.json(movie);
    } catch (err) {
      console.log(err);
    }
  },
};
