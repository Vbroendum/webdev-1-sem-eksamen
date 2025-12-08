'use strict';

module.exports = (sequelize, DataTypes) => {
  const serviceplan_product = sequelize.define('serviceplan_product', {
    serviceplan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'serviceplan_products',
    timestamps: true
  });

  serviceplan_product.associate = (models) => {

    serviceplan_product.belongsTo(models.serviceplan, {
      foreignKey: 'serviceplan_id',
      as: 'serviceplan'
    });

    serviceplan_product.belongsTo(models.product, {
      foreignKey: 'product_id',
      as: 'product'
    });

  };

  return serviceplan_product;
};
