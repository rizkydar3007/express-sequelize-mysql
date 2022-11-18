var express = require("express");
var router = express.Router();
const unitController = require("../controller/unit");

// GET ALL UNIT
router.get("/", unitController.listUnit);

// GET UNIT BY ID
router.get("/:id", unitController.detailUnit);

// CREATE UNIT
router.post("/", unitController.createUnit);

// UPDATE UNIT
router.put("/:id", unitController.updateUnit);

// DELETE UNIT
router.delete("/:id", unitController.deleteUnit);

module.exports = router;
