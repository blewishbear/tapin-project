'use strict';

const brewery = require("../models/brewery");
const { Brewery, User } = require("../models/index");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne({
      where: { username: 'Demo-lition'}
    })
    const user2 = await User.findOne({
      where: { username: 'FakeUser1'}
    })
    const user3 = await User.findOne({
      where: { username: 'FakeUser2'}
    })
    const brewery1 = await Brewery.findOne({
      where: { name: "Witch's Brew"}
    })
    const brewery2 = await Brewery.findOne({
      where: { name: "Brewed Up"}
    })
    const brewery3 = await Brewery.findOne({
      where: { name: "What do you Drink?"}
    })
    const brewery4 = await Brewery.findOne({
      where: { name: "The Shhmack"}
    })
     await queryInterface.bulkInsert('Beers', [
       {
        name: 'HoppleDoodleDooo',
        style: 'IPA',
        description: "Super bomb, made with the freshest hops, and the best of care!",
        userId: user1.id,
        breweryId: brewery1.id,
        createdAt: new Date(),
        updatedAt: new Date()

     },
       {
        name: 'Sierra Nevada',
        style: 'IPA',
        description: "Made with the hoppiest hops around",
        userId: user2.id,
        breweryId: brewery2.id,
        createdAt: new Date(),
        updatedAt: new Date()

     },
       {
        name: 'CREAM',
        style: 'Stout',
        description: "Cash Rules Everything Around ME!",
        userId: user3.id,
        breweryId: brewery3.id,
        createdAt: new Date(),
        updatedAt: new Date()

     },
       {
        name: 'Corona',
        style: 'Lager',
        description: "Jalisco never made anything better!",
        userId: user1.id,
        breweryId: brewery1.id,
        createdAt: new Date(),
        updatedAt: new Date()

     },
       {
        name: 'Fort George',
        style: 'Red Ale',
        description: "Made with the sweetest hops, i mean, its the best, like trump superlative best!",
        userId: user2.id,
        breweryId: brewery3.id,
        createdAt: new Date(),
        updatedAt: new Date()

     }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('Beers', null, {});
  }
};
