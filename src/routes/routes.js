const express = require("express");

const routes = express();

routes.get("/contas", (req, res) => {
  res.json("servidor ok");
});

module.exports = routes;
