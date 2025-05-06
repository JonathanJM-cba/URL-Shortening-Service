const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./config/configDb");
require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

const apiRouter = require("./routes");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenido a la API del servicio de acortamiento de URL.");
});

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Servidor escuchando en localhost:${port}`);
});

dbConnection();
