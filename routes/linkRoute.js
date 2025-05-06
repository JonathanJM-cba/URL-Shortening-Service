const express = require("express");
const { createLink } = require("../controllers/linkController");
const router = express.Router();

router.post("/", createLink);

module.exports = router;
