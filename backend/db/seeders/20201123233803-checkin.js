'use strict';
const { Brewery, User } = require("../models/index");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const user1 = await User.findOne({
    //   where: { username: 'Demo-lition'}
    // })
    // const user2 = await User.findOne({
    //   where: { username: 'FakeUser1'}
    // })
    // const user3 = await User.findOne({
    //   where: { username: 'FakeUser2'}
    // })
    // const user4 = await User.findOne({
    //   where: { username: 'NewUser'}
    // })
    // const beer1 = await Beer.findOne({
    //   where: { name: 'HoppleDoodleDooo'}
    // })
    // const beer2 = await Beer.findOne({
    //   where: { name: 'Sierra Nevada'}
    // })
    // const beer3 = await Beer.findOne({
    //   where: { name: 'CREAM'}
    // })
    // const beer4 = await Beer.findOne({
    //   where: { name: 'Dos Equis'}
    // })
    // const beer5 = await Beer.findOne({
    //   where: { name: 'Corona'}
    // })
    // const beer6 = await Beer.findOne({
    //   where: { name: 'Fort George'}
    // })
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
