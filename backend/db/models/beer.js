'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Beer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Beer.hasMany(models.Checkin, {foreignKey: 'beerId'})
      Beer.belongsTo(models.User, {foreignKey:'userId' })
      Beer.belongsTo(models.Brewery, {foreignKey:'breweryId' })
    }
  };
  Beer.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    style: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    breweryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Beer',
  });
  return Beer;
};
