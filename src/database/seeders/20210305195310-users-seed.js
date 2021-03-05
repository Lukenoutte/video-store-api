"use strict";
const User = require("../../models/User");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await User.bulkCreate(
      [
        {
          name: "Pedro Andrade",
          email: "p_dro@gmail.com",
          password: "p455w0rd",
        },
        {
          name: "Lucas Lima",
          email: "lukenoutte@hotmail.com",
          password: "43534",
        },
        {
          name: "Maria Santos",
          email: "m.santos@bol.com",
          password: "123456",
        },
        {
          name: "André Junior",
          email: "dark_star346@gmail.com",
          password: "alface",
        },
        {
          name: "Fernando Algusto",
          email: "fefe@facebook.com",
          password: "senha",
        },
      ],
      { individualHooks: true }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
