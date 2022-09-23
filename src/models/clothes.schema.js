'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('clothes', {
    typeOfClothing: {
      type: DataTypes.ENUM,
      values: ['pants', 'shirt', 'jacket', 'shorts', 'sweater'],
      allowNull: false,
    },
    brand: {
      type: DataTypes.ENUM,
      values: ['adidas', 'champion', 'nike', 'reebok', 'soffe', 'under armour'],
      allowNull: false,
    },
  });
};