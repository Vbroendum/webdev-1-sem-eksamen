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
      // OnetimeLink tilhører en Serviceplan
      onetime_link.belongsTo(models.serviceplan, {
        foreignKey: 'serviceplan_id',
      });
    }
  }
  onetime_link.init({
    uuid: DataTypes.UUID,
    serviceplan_id: DataTypes.INTEGER,
    is_used: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'onetime_link',
  });
  return onetime_link;
};