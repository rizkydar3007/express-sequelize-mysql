var express = require("express");
var router = express.Router();
const mediceneController = require("../controller/medicene");

// CREATE MEDICENE
router.post("/", mediceneController.createMedicene);

// LIST MEDICENE
router.get("/", mediceneController.listMedicene)

module.exports = router;
