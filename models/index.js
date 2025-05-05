const { sequelize } = require("../config/configDb");

const models = {
  linkModel: require("./linkModel"),
};

sequelize.sync({ force: false });

module.exports = models;
