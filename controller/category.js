const Validator = require("fastest-validator");
const v = new Validator();
const { Category } = require("../models");

const categoryController = {
  listCategory: async (req, res) => {
    const category = await Category.findAll();
    return res.json({
      status: 200,
      message: "Success Get All Data",
      data: category,
    });
  },

  detailCategory: async (req, res) => {
    const id = req.params.id;
    // Validation to Search Category by ID
    let category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({
        status: 404,
        message: "Data Not Found",
      });
    } else {
      return res.json({
        status: 200,
        message: "Success Get data",
        data: category,
      });
    }
  },

  createCategory: async (req, res) => {
    const schema = {
      id: { type: "number", integer: true },
      name: "string",
    };

    // Validation Process for Creating
    const validate = v.validate(req.body, schema);
    if (validate.length) {
      return res.status(400).send(validate);
    }

    // Create Category Process
    const category = await Category.create(req.body);
    res.json({
      status: 200,
      message: "Succes create data",
      data: category,
    });
  },

  updateCategory: async (req, res) => {
    const id = req.params.id;
    let category = await Category.findByPk(id);
    if (!category) {
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
    category = await category.update(req.body);
    res.json({
      status: 200,
      message: "Success update data",
      data: category,
    });
  },

  deleteCategory: async (req, res) => {
    const id = req.params.id;
    // Validation to Search Category by ID
    let category = await Category.findByPk(id);
    if (!category) {
      return res.json({
        status: 404,
        message: "Data Not Found",
      });
    }

    // Process Deleting Category by ID
    await category.destroy();
    res.json({
      status: 200,
      message: "Success Delete data",
    });
  },
};

module.exports = categoryController;
