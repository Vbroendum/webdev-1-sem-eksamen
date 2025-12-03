'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class image_state extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  image_state.init({
    image_state: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'image_state',
  });
  return image_state;
};