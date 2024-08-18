const { DataTypes } = require("sequelize"); ///insert from sequelize
const db = require("../config/db"); //insert database

// define the prodcut table
const Product = db.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "products",
    timestamps: false,
  }
);

// export the product model
module.exports = Product;
