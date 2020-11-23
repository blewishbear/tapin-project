'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Beers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      style: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: { model: "Users"}
      },
      breweryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: { model: "Breweries"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Beers');
  }
};
