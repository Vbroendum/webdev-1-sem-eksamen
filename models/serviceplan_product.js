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
      // composite tabel tilhører en Serviceplan
      serviceplan_product.belongsTo(models.serviceplan, {
        foreignKey: 'serviceplan_id',
      });

      // composite tabel tilhører et Product
      serviceplan_product.belongsTo(models.product, {
        foreignKey: 'product_id',
      });
    }
  }
  serviceplan_product.init({
    serviceplan_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'serviceplan_product',
  });
  return serviceplan_product;
};