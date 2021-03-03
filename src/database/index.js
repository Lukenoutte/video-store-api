const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const User = require("../models/User");
const Movie = require("../models/Movie");
const Dvd = require("../models/Dvd");

const connection = new Sequelize(dbConfig);

User.init(connection);
Movie.init(connection);
Dvd.init(connection);

User.associations(connection.models);
Dvd.associations(connection.models);

module.exports = connection;