const Rent = require("../models/Rent");
const User = require("../models/User");
const Movie = require("../models/Movie");

module.exports = {
  async store(req, res) {
    try {
      const { movie_id } = req.params;
      const { user_id } = req.body;
      
      const user =  User.findByPk(user_id);
      const movie = Movie.findByPk(movie_id);

      if(!user || !movie){
        return res.status(400).json({error: "Not found"});
      }

      const rent = await Rent.create({ movie_id, user_id });

      return res.json(rent);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
