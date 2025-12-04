'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      user_role.hasMany(models.user, {
        foreignKey: 'role_id',
        as: 'users',
      });
    }
  }
  
  user_role.init({
    role_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_role',
  });
  return user_role;
};