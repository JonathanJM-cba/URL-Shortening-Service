const { linkModel } = require("../models");
const generateShortCode = require("../utils/generateShortCode");
const handleHttpError = require("../utils/handleError");

const createLink = async (req, res) => {
  const { url } = req.body;
  try {
    //Se verifica que no exista otro link con la misma url
    const link = await linkModel.findOne({
      where: { url: url },
    });

    if (link) return handleHttpError(res, "ERROR_LINK_EXIST", 400);

    //En caso contrario se crea un nuevo enlance
    //Se genera el código corto aleatorio
    const shortedCode = generateShortCode();

    const linkData = {
      url: url,
      shortedCode: shortedCode,
      accessCount: 0,
    };

    const newLink = await linkModel.create(linkData);

    res.status(201).json({
      id: newLink.id,
      url: newLink.url,
      shortCode: newLink.shortedCode,
      createdAt: newLink.createdAt,
      updatedAt: newLink.updatedAt,
    });
  } catch (error) {
    console.log("Error al intentar crear link: ", error);
    handleHttpError(res, "ERROR_CREATE_LINK", 500);
  }
};

const updateLink = async (req, res) => {
  const { shortCode } = req.params;
  const { url } = req.body;
  try {
    //Se verifica si existe el enlace con dicho código corto
    const link = await linkModel.findOne({
      where: { shortedCode: shortCode },
    });

    if (!link) return handleHttpError(res, "ERROR_LINK_NOT_FOUND", 404);

    //Caso contrario, se actualiza la url del mismo
    const linkData = {
      url: url,
    };

    const updatedLink = await link.update(linkData);

    res.status(200).json({
      id: updatedLink.id,
      url: updatedLink.url,
      shortCode: updatedLink.shortedCode,
      createdAt: updatedLink.createdAt,
      updatedAt: updatedLink.updatedAt,
    });
  } catch (error) {
    console.log("Error al intentar actualizar enlance: ", error);
    handleHttpError(res, "ERROR_UPDATE_LINK", 500);
  }
};

const deleteLink = async (req, res) => {
  const { shortCode } = req.params;
  try {
    //Se verifica si existe el enlance
    const link = await linkModel.findOne({
      where: { shortedCode: shortCode },
    });

    if (!link) return handleHttpError(res, "ERROR_LINK_NOT_FOUND", 404);

    //Caso contrario se elimina el link
    await link.destroy();

    res.status(204).json({ message: "Link eliminado con éxito" });
  } catch (error) {
    console.log("Error al intentar eliminar link: ", error);
    handleHttpError(res, "ERROR_DELETE_LINK", 500);
  }
};

const getLinkByShortCode = async (req, res) => {
  const { shortCode } = req.params;
  try {
    //Se verifica si existe el enlance
    const link = await linkModel.findOne({
      where: { shortedCode: shortCode },
    });

    if (!link) return handleHttpError(res, "ERROR_LINK_NOT_FOUND", 404);

    //Caso contrario, se suma en uno el número de acceso a la ruta y luego se le redirige a l ruta original
    await link.update({
      accessCount: link.accessCount + 1,
    });

    //CASO 1: DEVOLVER UN JSON
    res.status(200).json({
      id: link.id,
      url: link.url,
      shortCode: link.shortedCode,
      createdAt: link.createdAt,
      updatedAt: link.updatedAt,
    });

    //CASO 2: REDIRECCIONAR A LA URL ORIGINAL
    //res.redirect(link.url);
  } catch (error) {
    console.log("Error al obtener el link original: ", error);
    handleHttpError(res, "ERROR_GET_LINK_BY_SHORT_CODE", 500);
  }
};

const getLinkWithStatistics = async (req, res) => {
  const { shortCode } = req.params;
  try {
    const link = await linkModel.findOne({
      where: { shortedCode: shortCode },
    });

    if (!link) return handleHttpError(res, "ERROR_LINK_NOT_FOUND", 404);

    res.status(200).json(link);
  } catch (error) {
    console.log("Error al intentar obtener link con estadisticaa: ", error);
    handleHttpError(res, "ERROR_GET_LINK_WITH_STATISTICS", 500);
  }
};

module.exports = {
  createLink,
  updateLink,
  deleteLink,
  getLinkByShortCode,
  getLinkWithStatistics,
};
