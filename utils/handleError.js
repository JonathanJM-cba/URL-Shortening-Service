/**
 * Función personalizada para el manejo de errores http
 * @param {Response} res - Pasar la respuesta del servidor
 * @param {String} message - Pasar el mensaje de error
 * @param {Integer} code - Pasar el código http de error
 */
const handleHttpError = (res, message, code = 400) => {
  res.status(code).json({ error: message });
};

module.exports = handleHttpError;
