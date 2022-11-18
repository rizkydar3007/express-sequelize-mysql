const Validator = require("fastest-validator");
const v = new Validator();
const { Supplier } = require("../models");

const supplierController = {
  listSupplier: async (req, res) => {
    const supplier = await Supplier.findAll();
    return res.json({
      status: 200,
      message: "Success Get All Data",
      data: supplier,
    });
  },
  detailSupplier: async (req, res) => {
    const id = req.params.id;
    // Validation to Search Supplier by ID
    let supplier = await Supplier.findByPk(id);
    if (!supplier) {
      return res.status(404).json({
        status: 404,
        message: "Data Not Found",
      });
    } else {
      return res.json({
        status: 200,
        message: "Success Get data",
        data: supplier,
      });
    }
  },
  createSupplier: async (req, res) => {
    const schema = {
      id: { type: "number", integer: true },
      name: "string",
      alamat: "string",
    };

    // Validation Process for Creating
    const validate = v.validate(req.body, schema);
    if (validate.length) {
      return res.status(400).json(validate);
    }

    // Create Supplier Process
    const supplier = await Supplier.create(req.body);
    res.json({
      status: 200,
      message: "Succes create data",
      data: supplier,
    });
  },
  updateSupplier: async (req, res) => {
    const id = req.params.id;
    let supplier = await Supplier.findByPk(id);
    if (!supplier) {
      return res.status(404).json({
        status: 404,
        message: "Data Not Found",
      });
    }

    // Validation Process for Updating
    const schema = {
      name: "string",
      alamat: "string",
    };
    const validate = v.validate(req.body, schema);
    if (validate.length) {
      return res.status(400).json(validate);
    }

    // Process for Update
    supplier = await supplier.update(req.body);
    res.json({
      status: 200,
      message: "Success update data",
      data: supplier,
    });
  },
  deleteSupplier: async (req, res) => {
    const id = req.params.id;
    // Validation to Search Supplier by ID
    let supplier = await Supplier.findByPk(id);
    if (!supplier) {
      return res.json({
        status: 404,
        message: "Data Not Found",
      });
    }

    // Process Deleting Supplier by ID
    await supplier.destroy();
    res.json({
      status: 200,
      message: "Success Delete data",
    });
  },
};

module.exports = supplierController;
