const port = 3003;

const bodyParser = require("body-parser");
const express = require("express");
const server = express();
const allowCors = require("./cors");
const queryParser = require("express-query-int");

//Para toda requisição que chegar, usar body-parser para interpretar.
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);
server.use(queryParser());

server.listen(port, function () {
  console.log(`Backend está rodando beleza na porta ${port}.`);
});

module.exports = server;
