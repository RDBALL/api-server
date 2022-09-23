'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('food', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cuisine: {
      type: DataTypes.ENUM,
      values: ['american', 'chinese', 'indian', 'italian', 'japanese', 'mediterranean', 'other'],
      allowNull: true,
    },
  });
};