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
      // define association here
      company.hasMany(models.station, {
        foreignKey: 'company_id',
        as: 'stations'
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