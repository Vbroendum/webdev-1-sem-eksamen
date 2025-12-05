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
      // Unit har mange Produkter
      unit.hasMany(models.product, {
        foreignKey: 'unit_id',
      });
    }
  }
  unit.init({
    unit: DataTypes.STRING,
    short_unit: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'unit',
  });
  return unit;
};