const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/configDb");

const Link = sequelize.define(
  "Link",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    shortedCode: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    accessCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "link",
    timestamps: true,
  }
);

module.exports = Link;
