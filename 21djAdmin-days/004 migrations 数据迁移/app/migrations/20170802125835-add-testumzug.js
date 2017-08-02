'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('testumzug', { id: Sequelize.INTEGER });
    },

    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('testumzug');
    }
};