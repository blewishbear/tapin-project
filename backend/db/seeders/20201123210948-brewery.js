'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Breweries', [
      {
        name: "Witch's Brew",
        location: 'San Leandro, California',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Brewed Up",
        location: 'Hayward, California',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "What do you Drink?",
        location: 'Oakland, Mars',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The Shhmack",
        location: 'San Lorenzo, Nebula3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Breweries', null, {});

  }
};
