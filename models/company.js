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
      company.hasMany(models.station, { 
        foreignKey: 'company_id' 
      });
      company.hasMany(models.serviceplan, { 
        foreignKey: 'company_id' 
      });
    }
  }
  Company.init({
    name: { type: DataTypes.STRING, allowNull: false },
    cvr: { type: DataTypes.INTEGER, unique: true, allowNull: false },
  }, {
    sequelize,
    modelName: 'company',
    tableName: 'companies',
  });
  return Company;
};