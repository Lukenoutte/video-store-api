const { Model, DataTypes } = require("sequelize");


class Movie extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        director: DataTypes.STRING,
      },
      {
        sequelize
      }
    );
  }

  static associations(models) {
    this.hasMany(models.Dvd, { foreignKey: "movie_id", as:"dvds"});
}



}

module.exports = Movie;
