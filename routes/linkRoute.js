const express = require("express");
const {
  createLink,
  updateLink,
  deleteLink,
} = require("../controllers/linkController");
const { linkValidator } = require("../validators/linkValidator");
const router = express.Router();

router.post("/", linkValidator, createLink);

router.put("/:shortCode", linkValidator, updateLink);

router.delete("/:shortCode", deleteLink);

module.exports = router;
