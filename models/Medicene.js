module.exports = (sequelize, DataTypes) => {
  var Medicene = sequelize.define(
    "Medicene",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: { tableName: "category" },
          key: "id",
        },
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      unitId: {
        type: DataTypes.INTEGER,
        references: {
          model: { tableName: "unit" },
          key: "id",
        },
        allowNull: false,
      },
      storageId: {
        type: DataTypes.INTEGER,
        references: {
          model: { tableName: "storage" },
          key: "id",
        },
        allowNull: false,
      },
      tglKadaluarsa: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      hargaBeli: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      supplierId: {
        type: DataTypes.INTEGER,
        references: {
          model: { tableName: "supplier" },
          key: "id",
        },
        allowNull: false,
      },
      hargaJual: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      keterangan: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "medicene",
    }
  );
  return Medicene;
};
