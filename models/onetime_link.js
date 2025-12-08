'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class onetime_link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      onetime_link.belongsTo(models.serviceplan, {
        foreignKey: 'serviceplan_id', 
        as: 'serviceplan',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  onetime_link.init({
    uuid: DataTypes.STRING,
    serviceplan_id: DataTypes.INTEGER,
    is_used: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'onetime_link',
  });
  return onetime_link;
};