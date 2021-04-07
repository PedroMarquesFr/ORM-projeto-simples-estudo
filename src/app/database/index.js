const Sequelize = require("sequelize");
const dbConfig = require("../../config/database.js");

const Book = require("../models/book");

const connection = new Sequelize(dbConfig);

Book.init(Connection);

module.exports = connection;
