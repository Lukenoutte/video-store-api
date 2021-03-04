const { Sequelize } = require("sequelize");
const sequelize = require("../database");
const Movie = require("./Movie");
const User = require("./User");

var Rent = sequelize.define("rent");

User.hasMany(Rent, {as: "client", foreignKey: "user_id"});
Rent.belongsTo(User, {as: "client", foreignKey: "user_id"});

Movie.hasMany(Rent, {as: "rent_dvd", foreignKey: "movie_id"});
Rent.belongsTo(Movie, {as: "rent_dvd", foreignKey: "movie_id"});

module.exports = Rent;
