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
      // define association here

      serviceplan_product.belongsTo(models.product, {
      foreignKey: 'product_id',
      as: 'product',
      });

      serviceplan_product.belongsTo(models.serviceplan, {
      foreignKey: 'serviceplan_id',
      as: 'serviceplan',
      });

      //serviceplan_product.belongsTo(models.serviceplan, {
        //foreignKey: 'serviceplan_id',
        //as: 'serviceplan',
        //onDelete: 'RESTRICT',
        //onUpdate: 'CASCADE',
      //});
    }
  }
  serviceplan_product.init({
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'serviceplan_product',
  });
  return serviceplan_product;
};