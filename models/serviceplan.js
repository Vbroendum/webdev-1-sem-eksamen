'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class serviceplan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  serviceplan.init({
    serviceplan_done_at: DataTypes.DATE,
    serviceplan_expired_at: DataTypes.DATE,
    station_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
    images_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'serviceplan',
  });
  return serviceplan;
};