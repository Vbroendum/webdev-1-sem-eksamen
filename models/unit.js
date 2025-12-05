'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class unit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      unit.hasMany(models.product, { 
        foreignKey: 'unit_id' 
      });
    }
  }
  Unit.init({
    unit: { type: DataTypes.STRING, allowNull: false, unique: true },
    short_unit: { type: DataTypes.STRING, allowNull: false, unique: true },
  }, {
    sequelize,
    modelName: 'unit',
    tableName: 'units',
  });
  return Unit;
};