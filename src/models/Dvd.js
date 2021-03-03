const { Model, DataTypes } = require("sequelize");
import Movie from "./Movie";

class Dvd extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        director: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

}

module.exports = Dvd;
