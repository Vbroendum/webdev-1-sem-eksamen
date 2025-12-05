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
      user.belongsTo(models.user_role, { 
        foreignKey: 'role_id' 
      });
      user.belongsTo(models.station, { 
        foreignKey: 'station_id' 
      });
      user.hasMany(models.serviceplan, { 
        foreignKey: 'user_id' 
      });
    }
  }
  User.init({
    station_id: { type: DataTypes.INTEGER, allowNull: true },
    role_id: { type: DataTypes.INTEGER, allowNull: false },
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    user_email: { type: DataTypes.STRING, allowNull: false, unique: true },
    user_password: { type: DataTypes.STRING, allowNull: false },
  }, {
    sequelize,
    modelName: 'user',
    tableName: 'users',
  });
  return User;
};