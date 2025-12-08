'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {

      // ✅ User → Role (many users → one role)
      user.belongsTo(models.user_role, {
        foreignKey: 'role_id',
        as: 'role'
      });

      // ✅ User ↔ Station (many-to-many)
      user.belongsToMany(models.station, {
        through: models.user_station,
        foreignKey: 'user_id',
        otherKey: 'station_id',
        as: 'stations'
      });

      user.hasMany(models.serviceplan, {
        foreignKey: 'user_id',
        as: 'serviceplans'
      });
    }
  }

  user.init({
    role_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    user_email: DataTypes.STRING,
    user_password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
    tableName: 'users'
  });

  return user;
};
