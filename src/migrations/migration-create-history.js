'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        // email: DataTypes.STRING,
        // password: DataTypes.STRING,
        // firstName: DataTypes.STRING,
        // lastName: DataTypes.STRING,
        // address: DataTypes.STRING,
        // gender: DataTypes.STRING,
        // roldId: DataTypes.STRING
        await queryInterface.createTable('histories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            patientId: {
                type: Sequelize.INTEGER
            },
            doctorId: {
                type: Sequelize.INTEGER
            },
            description: {
                type: Sequelize.TEXT
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('histories');
    }
};