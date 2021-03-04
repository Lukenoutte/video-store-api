const { Sequelize } = require("sequelize");
const sequelize = require("../database");

var Movie = sequelize.define('movie', {
  title: Sequelize.STRING,
  director: Sequelize.STRING,
  quantity: Sequelize.INTEGER,
});


module.exports = Movie;
