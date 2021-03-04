const bcrypt = require("bcrypt");
const { Sequelize } = require("sequelize");
const sequelize = require("../database");

var User = sequelize.define(
  "user",
  {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
  },
  {
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

module.exports = User;
