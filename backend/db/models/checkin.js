'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Checkin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Checkin.belongsTo(models.User, { foreignKey: "userId"})
      Checkin.belongsTo(models.Beer, { foreignKey: "beerId"})
      Checkin.hasMany(models.Toast, { foreignKey: "checkinId"})
    }
  };
  Checkin.init({
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    beerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Checkin',
  });
  return Checkin;
};
