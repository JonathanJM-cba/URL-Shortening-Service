const express = require("express");
const {
  createLink,
  updateLink,
  deleteLink,
  getLinkByShortCode,
} = require("../controllers/linkController");
const { linkValidator } = require("../validators/linkValidator");
const router = express.Router();

router.post("/", linkValidator, createLink);

router.put("/:shortCode", linkValidator, updateLink);

router.delete("/:shortCode", deleteLink);

router.get("/:shortCode", getLinkByShortCode);

module.exports = router;
