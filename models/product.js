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
      // define association here

      product.belongsTo(models.unit, {
        foreignKey: 'unit_id',
        as: 'unit',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });

      product.belongsToMany(models.serviceplan, {
  through: models.serviceplan_product,
  foreignKey: 'product_id',       // FK i join-tabellen
  otherKey: 'serviceplan_id',     // FK i join-tabellen
  as: 'serviceplans',             // alias når du henter serviceplans
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