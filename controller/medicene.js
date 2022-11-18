const Validator = require("fastest-validator");
const { Model } = require("sequelize");
const v = new Validator();
const { Medicene } = require("../models");
const db = require("../models");
const { Category } = require("../models");
const { Storage } = require("../models");
const { Supplier } = require("../models");
const { Unit } = require("../models");

const mediceneController = {
  // CREATE MEDICENE
  createMedicene: async (req, res) => {
    const schema = {
      id: { type: "number", integer: true },
      name: "string",
      categoryId: "number",
      stock: "number",
      unitId: "number",
      storageId: "number",
      tglKadaluarsa: "number",
      hargaBeli: "number",
      supplierId: "number",
      hargaJual: "number",
    };

    // Validation Process for Creating
    const validate = v.validate(req.body, schema);
    if (validate.length) {
      return res.status(400).send(validate);
    }

    // Create Medicene Process
    const medicene = await Medicene.create(req.body);
    res.json({
      status: 200,
      message: "Succes create data",
      data: medicene,
    });
  },

  // LIST MEDICENE
  listMedicene: async (req, res) => {
    const medicene = await Medicene.findAll({
      include: model.category,
    });
    return res.json({
      status: 200,
      message: "Success Get All Data",
      data: medicene,
    });
  },
  detailMedicene: async (req, res) => {},

  updateMedicene: async (req, res) => {},

  deleteMedicene: async (req, res) => {},
};

module.exports = mediceneController;
