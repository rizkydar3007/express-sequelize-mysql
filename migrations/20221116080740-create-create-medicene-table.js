"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("medicene", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: "category" },
          key: "id",
        },
        allowNull: false,
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      unitId: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: "unit" },
          key: "id",
        },
        allowNull: false,
      },
      storageId: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: "storage" },
          key: "id",
        },
        allowNull: false,
      },
      tglKadaluarsa: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      hargaBeli: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      supplierId: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: "supplier" },
          key: "id",
        },
        allowNull: false,
      },
      hargaJual: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      keterangan: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("medicene");
  },
};
