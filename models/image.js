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
      // define association here

      image.belongsTo(models.serviceplan, {
        foreignKey: 'serviceplan_id',
        as: 'serviceplan',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });

    }
    
  }
  image.init({
    serviceplan_id: DataTypes.INTEGER,
    upload_date: DataTypes.DATE,
    is_after: DataTypes.BOOLEAN,
    filepath: DataTypes.STRING,
    delete_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'image',
  });
  return image;
};