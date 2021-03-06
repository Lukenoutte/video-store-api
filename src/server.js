const express = require("express");
const routes  = require("./routes");
const server = express();

require("./database");

server.use(express.json());
server.use(routes);


module.exports = server;
