const { Sequelize } = require("sequelize");
require("dotenv").config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;

const sequelize = new Sequelize({
  database: dbName,
  username: dbUser,
  password: dbPassword,
  host: dbHost,
  port: dbPort,
  dialect: "postgres",
});

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "CONECTADO CON ÉXITO A LA BASE DE DATOS DE ACORTAMIENTO DE URL"
    );
  } catch (error) {
    console.log("Error al intentar conectarse a la Base de Datos: ", error);
  }
};

module.exports = { sequelize, dbConnection };
