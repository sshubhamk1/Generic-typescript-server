"use strict";
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Users", {
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
            },
            deletedAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true,
            },
            first_name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            last_name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            email: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            guid: {
                type: sequelize_1.DataTypes.UUIDV4,
                allowNull: false,
                unique: true,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Users");
    },
};
