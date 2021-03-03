const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      {
        sequelize,
        hooks: {
          beforeCreate: async (user) => {
            try {
              const hash = await bcrypt.hash(user.password, 10);
              user.password = hash;
            } catch (err) {
              console.log(err);
            }
          },
        },
      }
    );
  }
}

module.exports = User;
