'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Product tilhører en Unit
      product.belongsTo(models.unit, {
        foreignKey: 'unit_id',
      });

      // Many-to-Many med Serviceplan via ServiceplanProduct
      product.belongsToMany(models.serviceplan, {
        through: 'serviceplan_product',
        foreignKey: 'product_id',
      });
      
      // Har mange ServiceplanProduct (composite table)
      product.hasMany(models.serviceplan_product, {
        foreignKey: 'product_id',
      });
    }
  }
  product.init({
    products_name: DataTypes.STRING,
    unit_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};