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

    res
      .status(201)
      .json({
        id: newLink.id,
        url: newLink.url,
        shortedCode: newLink.shortedCode,
        createdAt: newLink.createdAt,
        updatedAt: newLink.updatedAt,
      });
  } catch (error) {
    console.log("Error al intentar crear link: ", error);
    handleHttpError(res, "ERROR_CREATE_LINK", 500);
  }
};

module.exports = { createLink };
