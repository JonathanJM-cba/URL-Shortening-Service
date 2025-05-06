/**
 * Función para generar código corto para el enlance
 * @param {Integer} length - Pasar la longitud del código a generar
 * @returns {String} - Retorna un código aleatorio
 */
const generateShortCode = (length = 6) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let results = "";
  for (let i = 0; i < length; i++) {
    results += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return results;
};

module.exports = generateShortCode;
