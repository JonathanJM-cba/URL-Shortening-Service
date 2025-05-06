const express = require("express");
const { createLink } = require("../controllers/linkController");
const { linkValidator } = require("../validators/linkValidator");
const router = express.Router();

router.post("/", linkValidator, createLink);

module.exports = router;
