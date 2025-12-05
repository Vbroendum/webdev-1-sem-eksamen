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
      station.belongsTo(models.company, { 
        foreignKey: 'company_id' 
      });
      station.hasMany(models.user, { 
        foreignKey: 'station_id' 
      });
      station.hasMany(models.serviceplan, { 
        foreignKey: 'station_id' 
      });
    }
  }
  Station.init({
    company_id: { type: DataTypes.INTEGER, allowNull: false },
    station_address: { type: DataTypes.STRING, allowNull: false },
    station_postal_code: { type: DataTypes.INTEGER, allowNull: false },
    station_has_bay: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    station_name: { type: DataTypes.STRING, allowNull: false, unique: true },
  }, {
    sequelize,
    modelName: 'station',
    tableName: 'stations',
  });
  return Station;
};