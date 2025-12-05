'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // User tilhører en User_role 
      user.belongsTo(models.user_role, {
        foreignKey: 'role_id',
      });

      // User tilhører en Station
      user.belongsTo(models.station, {
        foreignKey: 'station_id',
      });

      // User har mange Serviceplaner
      user.hasMany(models.serviceplan, {
        foreignKey: 'user_id',
      });
    }
  }
  user.init({
    station_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    user_email: DataTypes.STRING,
    user_password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};