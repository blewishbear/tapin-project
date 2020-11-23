'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Toast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Toast.belongsTo(models.User, { foreignKey: 'userId'})
      Toast.belongsTo(models.Checkin, { foreignKey: 'checkinId'})
    }
  };
  Toast.init({
    userId: DataTypes.INTEGER,
    checkinId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Toast',
  });
  return Toast;
};
