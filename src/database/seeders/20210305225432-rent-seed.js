"use strict";
const Rent = require("../../models/Rent");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Rent.bulkCreate(
      [
        {
          user_id: "3",
          movie_id: "3",
        },
        {
          user_id: "2",
          movie_id: "1",
        },
        {
          user_id: "3",
          movie_id: "1",
        },
        {
          user_id: "4",
          movie_id: "1",
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("rents", null, {});
  },
};
