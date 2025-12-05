'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // En Company kan have mange Stationer
      company.hasMany(models.station, {
        foreignKey: 'company_id',
      });
      // En Company kan have mange Serviceplaner
      company.hasMany(models.serviceplan, {
        foreignKey: 'company_id',
      });
    }
  }
  company.init({
    name: DataTypes.STRING,
    cvr: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'company',
  });
  return company;
};