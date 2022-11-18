const Validator = require("fastest-validator");
const v = new Validator();
const { Storage } = require("../models");

const storageController = {
  listStorage: async (req, res) => {
    const storage = await Storage.findAll();
    return res.json({
      status: 200,
      message: "Success Get All Data",
      data: storage,
    });
  },
  detailStorage: async (req, res) => {
    const id = req.params.id;
    // Validation to Search Storage by ID
    let storage = await Storage.findByPk(id);
    if (!storage) {
      return res.status(404).json({
        status: 404,
        message: "Data Not Found",
      });
    } else {
      return res.json({
        status: 200,
        message: "Success Get data",
        data: storage,
      });
    }
  },
  createStorage: async (req, res) => {
    const schema = {
      id: { type: "number", integer: true },
      name: "string",
    };

    // Validation Process for Creating
    const validate = v.validate(req.body, schema);
    if (validate.length) {
      return res.status(400).json(validate);
    }

    // Create Category Process
    const storage = await Storage.create(req.body);
    res.json({
      status: 200,
      message: "Succes create data",
      data: storage,
    });
  },
  updateStorage: async (req, res) => {
    const id = req.params.id;
    let storage = await Storage.findByPk(id);
    if (!storage) {
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
    storage = await storage.update(req.body);
    res.json({
      status: 200,
      message: "Success update data",
      data: storage,
    });
  },
  deleteStorage: async (req, res) => {
    const id = req.params.id;
    // Validation to Search Storage by ID
    let storage = await Storage.findByPk(id);
    if (!storage) {
      return res.json({
        status: 404,
        message: "Data Not Found",
      });
    }

    // Process Deleting Category by ID
    await storage.destroy();
    res.json({
      status: 200,
      message: "Success Delete data",
    });
  },
};

module.exports = storageController;
