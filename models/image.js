'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Image tilhører en Image_state
      image.belongsTo(models.image_state, {
        foreignKey: 'image_state_id',
      });

      // Image tilhører en Serviceplan (billedet er en del af denne plan?)
      image.belongsTo(models.serviceplan, {
        foreignKey: 'serviceplan_id',
      });
    }
  }
  image.init({
    serviceplan_id: DataTypes.INTEGER,
    upload_date: DataTypes.DATE,
    image_state_id: DataTypes.INTEGER,
    filepath: DataTypes.STRING,
    delete_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'image',
  });
  return image;
};