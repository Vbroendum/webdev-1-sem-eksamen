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
      serviceplan.belongsTo(models.station, { 
        foreignKey: 'station_id' 
      });
      serviceplan.belongsTo(models.user, { 
        foreignKey: 'user_id' 
      });
      serviceplan.belongsTo(models.company, { 
        foreignKey: 'company_id' 
      });
      serviceplan.hasMany(models.image, { 
        foreignKey: 'serviceplan_id' 
      });
      serviceplan.hasMany(models.onetime_link, { 
        foreignKey: 'serviceplan_id' 
      });
      serviceplan.belongsToMany(models.product, {
        through: 'serviceplan_product',
        foreignKey: 'serviceplan_id',
      });
      serviceplan.hasMany(models.serviceplan_product, { 
        foreignKey: 'serviceplan_id' 
      });
    }
  }
  Serviceplan.init({
    serviceplan_done_at: { type: DataTypes.DATE, allowNull: true },
    serviceplan_expired_at: { type: DataTypes.DATE, allowNull: false },
    station_id: { type: DataTypes.INTEGER, allowNull: false },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    company_id: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    sequelize,
    modelName: 'serviceplan',
    tableName: 'serviceplans',
  });
  return Serviceplan;
};