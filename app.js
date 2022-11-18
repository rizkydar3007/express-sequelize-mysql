require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var categoryRouter = require("./routes/category");
var storageRouter = require("./routes/storage");
var supplierRouter = require("./routes/supplier");
var unitRouter = require("./routes/unit");
var mediceneRouter = require("./routes/medicene");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/category", categoryRouter);
app.use("/storage", storageRouter);
app.use("/supplier", supplierRouter);
app.use("/unit", unitRouter);
app.use("/medicene", mediceneRouter);

module.exports = app;
