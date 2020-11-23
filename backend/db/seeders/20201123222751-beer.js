'use strict';

const brewery = require("../models/brewery");
const { Brewery, User } = require("../models/index");

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Beers', [
       {
        name: 'HoppleDoodleDooo',
        style: 'IPA',
        description: "Super bomb, made with the freshest hops, and the best of care!",
        userId: 1,
        breweryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()

     },
       {
        name: 'Sierra Nevada',
        style: 'IPA',
        description: "Made with the hoppiest hops around",
        userId: 2,
        breweryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()

     },
       {
        name: 'CREAM',
        style: 'Stout',
        description: "Cash Rules Everything Around ME!",
        userId: 3,
        breweryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()

     },
       {
        name: 'Dos Equis',
        style: 'Lager',
        description: "Mexico's finest",
        userId: 4,
        breweryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()

     },
       {
        name: 'Corona',
        style: 'Lager',
        description: "Jalisco never made anything better!",
        userId: 1,
        breweryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()

     },
       {
        name: 'Fort George',
        style: 'Red Ale',
        description: "Made with the sweetest hops, i mean, its the best, like trump superlative best!",
        userId: 2,
        breweryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()

     }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('Beers', null, {});
  }
};
