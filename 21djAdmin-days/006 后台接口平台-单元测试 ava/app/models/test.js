'use strict';
module.exports = function(sequelize, DataTypes) {
  var test = sequelize.define('test', {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return test;
};