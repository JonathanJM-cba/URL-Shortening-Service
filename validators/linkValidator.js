const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const linkValidator = [
  check("url")
    .exists()
    .withMessage("El campo url debe existir")
    .notEmpty()
    .withMessage("El campo url no debe estar vacío")
    .isURL({
      protocols: ["http", "https", "ftp"],
      require_protocol: true,
      require_valid_protocol: true,
    })
    .withMessage(
      "El campo url debe estar en formator URL con protocolos http, https o ftp (ej: https://dominio.com"
    )
    .isLength({ max: 255 })
    .withMessage("El campo url no debe superar los 255 caracteres"),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { linkValidator };
