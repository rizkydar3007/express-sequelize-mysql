var express = require("express");
var router = express.Router();
const supplierController = require('../controller/supplier')

// GET ALL SUPPLIER
router.get("/", supplierController.listSupplier);

// GET SUPPLIER BY ID
router.get("/:id", supplierController.detailSupplier);

// CREATE SUPPLIER
router.post("/", supplierController.createSupplier);

// UPDATE SUPPLIER
router.put("/:id", supplierController.updateSupplier);

// DELETE SUPPLIER
router.delete("/:id", supplierController.deleteSupplier);

module.exports = router;
