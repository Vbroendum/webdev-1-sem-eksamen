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
      onetime_link.belongsTo(models.serviceplan, { 
        foreignKey: 'serviceplan_id' 
      });
    }
  }
  OnetimeLink.init({
    uuid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, allowNull: false, unique: true },
    serviceplan_id: { type: DataTypes.INTEGER, allowNull: false },
    is_used: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  }, {
    sequelize,
    modelName: 'onetime_link',
    tableName: 'onetime_links',
  });
  return OnetimeLink;
};