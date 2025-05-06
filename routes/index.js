const express = require("express");
const router = express.Router();

router.use("/shorten", require("./linkRoute"));

module.exports = router;
