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
      image.belongsTo(models.serviceplan, { 
        foreignKey: 'serviceplan_id' 
      });
    }
  }
  Image.init({
    serviceplan_id: { type: DataTypes.INTEGER, allowNull: false },
    upload_date: { type: DataTypes.DATE, allowNull: false },
    filepath: { type: DataTypes.STRING, allowNull: false },
    delete_date: { type: DataTypes.DATE, allowNull: true },
    image_state: { type: DataTypes.STRING, allowNull: false, defaultValue: 'Pending' },
  }, {
    sequelize,
    modelName: 'image',
    tableName: 'images',
  });
  return Image;
};