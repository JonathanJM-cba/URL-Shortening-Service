const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/configDb");

const Link = sequelize.define(
  "Link",
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    shortedCode: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    accessCount: {
      type: DataTypes.INTEGER(11),
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
