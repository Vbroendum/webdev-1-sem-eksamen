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
      product.belongsTo(models.unit, { 
        foreignKey: 'unit_id' 
      });
      product.belongsToMany(models.serviceplan, {
        through: 'serviceplan_product',
        foreignKey: 'product_id',
      });
      product.hasMany(models.serviceplan_product, { 
        foreignKey: 'product_id' 
      });
    }
  }
  Product.init({
    products_name: { type: DataTypes.STRING, allowNull: false, unique: true },
    unit_id: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    sequelize,
    modelName: 'product',
    tableName: 'products',
  });
  return Product;
};