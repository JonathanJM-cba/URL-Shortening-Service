const express = require("express");
const { createLink, updateLink } = require("../controllers/linkController");
const { linkValidator } = require("../validators/linkValidator");
const router = express.Router();

router.post("/", linkValidator, createLink);

router.put("/:shortCode", linkValidator, updateLink);

module.exports = router;
