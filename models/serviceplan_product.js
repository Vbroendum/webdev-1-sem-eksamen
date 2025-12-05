'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class serviceplan_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      serviceplan_product.belongsTo(models.serviceplan, { 
        foreignKey: 'serviceplan_id' 
      });
      serviceplan_product.belongsTo(models.product, { 
        foreignKey: 'product_id' 
      });
    }
  }
  ServiceplanProduct.init({
    serviceplan_id: { type: DataTypes.INTEGER, allowNull: false },
    product_id: { type: DataTypes.INTEGER, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    sequelize,
    modelName: 'serviceplan_product',
    tableName: 'serviceplan_products',
  });
  return ServiceplanProduct;
};