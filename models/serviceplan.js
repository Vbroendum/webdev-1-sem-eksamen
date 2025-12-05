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
      serviceplan.hasMany(models.onetime_link, { 
        foreignKey: 'serviceplan_id' 
      });
      serviceplan.hasMany(models.image, { 
        foreignKey: 'serviceplan_id' 
      });
      // Many-to-Many med Product via ServiceplanProduct
      serviceplan.belongsToMany(models.product, {
        through: 'serviceplan_product',
        foreignKey: 'serviceplan_id',
      });
      serviceplan.hasMany(models.serviceplan_product, { 
        foreignKey: 'serviceplan_id' 
      });
    }
  }
  serviceplan.init({
    serviceplan_done_at: DataTypes.DATE,
    serviceplan_expired_at: DataTypes.DATE,
    station_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
    images_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'serviceplan',
  });
  return serviceplan;
};