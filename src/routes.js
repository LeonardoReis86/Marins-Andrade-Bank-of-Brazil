const express = require("express");
const accounts = require("./controllers/accounts");

const routes = express();

routes.get("/accounts", accounts.listAll);

module.exports = routes;
