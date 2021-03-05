"use strict";
const Movie = require("../../models/Movie");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Movie.bulkCreate(
      [
        {
          title: "Um Sonho de Liberdade",
          director: "Frank Darabont",
          quantity: "2",
        },
        {
          title: "Batman: O Cavaleiro das Trevas",
          director: "Christopher Nolan",
          quantity: "3",
        },
        {
          title: "Matrix",
          director: "The Wachowski Brothers",
          quantity: "1",
        },
        {
          title: "Cidade de Deus",
          director: "Fernando Meirelles, Kátia Lund",
          quantity: "3",
        },
        {
          title: "Interestelar",
          director: "Christopher Nolan",
          quantity: "1",
        },
        {
          title: "De Volta para o Futuro",
          director: "Robert Zemeckis",
          quantity: "1",
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("movies", null, {});
  },
};
