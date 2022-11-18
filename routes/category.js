var express = require("express");
var router = express.Router();
const categoryController = require('../controller/category')

// GET ALL CATEGORY
router.get("/", categoryController.listCategory);

// GET CATEGORY BY ID
router.get("/:id", categoryController.detailCategory);

// CREATE CATEGORY
router.post("/", categoryController.createCategory);

// UPDATE CATEGORY
router.put("/:id", categoryController.updateCategory);

// DELETE CATEGORY
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
