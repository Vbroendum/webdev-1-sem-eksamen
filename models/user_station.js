'use strict';

module.exports = (sequelize, DataTypes) => {
  const user_station = sequelize.define('user_station', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    station_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'user_stations',
    timestamps: true
  });

  user_station.associate = (models) => {

    user_station.belongsTo(models.user, {
      foreignKey: 'user_id',
      as: 'user'
    });

    user_station.belongsTo(models.station, {
      foreignKey: 'station_id',
      as: 'station'
    });

  };

  return user_station;
};
