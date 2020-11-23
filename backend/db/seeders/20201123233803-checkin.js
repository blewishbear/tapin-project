'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Checkins', [
      {
        description: 'It was pretty good',
        userId: 1,
        beerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Taste like Corona',
        userId: 2,
        beerId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Taste like Dos Equis',
        userId: 2,
        beerId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Wow! Almost exactly like Half Dome!',
        userId: 1,
        beerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Checkins', null, {});

  }
};
