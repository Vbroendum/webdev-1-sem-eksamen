'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class serviceplan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      serviceplan.belongsTo(models.station, {
        foreignKey: 'station_id',
        as: 'station',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });

      serviceplan.belongsTo(models.user, {
        foreignKey: 'user_id',
        as: 'user',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });

      serviceplan.belongsTo(models.images, {
        foreignKey: 'images_id',
        as: 'images',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });

      serviceplan.hasOne(models.onetime_link, {
        foreignKey: 'serviceplan_id',
        as: 'onetime_link',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });

      serviceplan.belongsToMany(models.product, {
  through: models.serviceplan_product,
  foreignKey: 'serviceplan_id',   // FK i join-tabellen
  otherKey: 'product_id',         // FK i join-tabellen
  as: 'products',                 // alias når du henter products
});

    }
  }
  serviceplan.init({
    serviceplan_done_at: DataTypes.DATE,
    serviceplan_expired_at: DataTypes.DATE,
    station_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    images_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'serviceplan',
  });
  return serviceplan;
};