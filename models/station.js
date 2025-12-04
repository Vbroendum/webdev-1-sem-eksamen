'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      station.belongsTo(models.company, {
        foreignKey: 'company_id',
        as: 'company',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });

      station.hasMany(models.user, {
        foreignKey: 'station_id',
        as: 'users',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });

      station.hasMany(models.serviceplan, {
        foreignKey: 'station_id',
        as: 'serviceplans',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  station.init({
    company_id: DataTypes.INTEGER,
    station_address: DataTypes.STRING,
    station_postal_code: DataTypes.INTEGER,
    station_has_bay: DataTypes.BOOLEAN,
    station_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'station',
  });
  return station;
};