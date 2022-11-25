const express = require("express");
const account = require('./account);

const routes = express();

routes.get("/account", account.listarcontas);

module.exports = routes;
