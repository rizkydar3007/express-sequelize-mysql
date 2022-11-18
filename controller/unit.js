const Validator = require("fastest-validator");
const v = new Validator();
const { Unit } = require("../models");

const unitController = {
  listUnit: async (req, res) => {
    const unit = await Unit.findAll();
    return res.json({
      status: 200,
      message: "Success Get All Data",
      data: unit,
    });
  },
  detailUnit: async (req, res) => {
    const id = req.params.id;
    // Validation to Search Unit by ID
    let unit = await Unit.findByPk(id);
    if (!unit) {
      return res.status(404).json({
        status: 404,
        message: "Data Not Found",
      });
    } else {
      return res.json({
        status: 200,
        message: "Success Get data",
        data: unit,
      });
    }
  },
  createUnit: async (req, res) => {
    const schema = {
      id: { type: "number", integer: true },
      name: "string",
    };

    // Validation Process for Creating
    const validate = v.validate(req.body, schema);
    if (validate.length) {
      return res.status(400).json(validate);
    }

    // Create Unit Process
    const unit = await Unit.create(req.body);
    res.json({
      status: 200,
      message: "Succes create data",
      data: unit,
    });
  },
  updateUnit: async (req, res) => {
    const id = req.params.id;
    let unit = await Unit.findByPk(id);
    if (!unit) {
      return res.status(404).json({
        status: 404,
        message: "Data Not Found",
      });
    }

    // Validation Process for Updating
    const schema = {
      name: "string",
    };
    const validate = v.validate(req.body, schema);
    if (validate.length) {
      return res.status(400).json(validate);
    }

    // Process for Update
    unit = await unit.update(req.body);
    res.json({
      status: 200,
      message: "Success update data",
      data: unit,
    });
  },
  deleteUnit: async (req, res) => {
    const id = req.params.id;
    // Validation to Search Unit by ID
    let unit = await Unit.findByPk(id);
    if (!unit) {
      return res.json({
        status: 404,
        message: "Data Not Found",
      });
    }

    // Process Deleting Unit by ID
    await unit.destroy();
    res.json({
      status: 200,
      message: "Success Delete data",
    });
  },
};

module.exports = unitController;
