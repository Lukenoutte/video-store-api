"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("dvds", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      movie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refereces: { model: "movies", key: "id" },
        onUpdate: "CASCADE",
        OnDelete: "CASCADE"
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("dvds");
  },
};
