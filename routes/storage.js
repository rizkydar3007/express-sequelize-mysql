var express = require("express");
var router = express.Router();
const storageController = require('../controller/storage')

// GET ALL STORAGE
router.get("/", storageController.listStorage);

// GET STORAGE BY ID
router.get("/:id", storageController.detailStorage);

// CREATE STORAGE
router.post("/", storageController.createStorage);

// UPDATE STORAGE
router.put("/:id", storageController.updateStorage);

// DELETE STORAGE
router.delete("/:id", storageController.deleteStorage);

module.exports = router;
