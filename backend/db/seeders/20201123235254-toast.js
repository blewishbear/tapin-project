'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Toasts', [
        {
        userId: 2,
        checkinId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        userId: 3,
        checkinId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Toasts', null, {});

  }
};
