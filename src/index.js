const express = require("express");

const blogController = require('./controller/blog.controller')
const app = express();
app.use(express.json());

app.use('', blogController);

module.exports = app;
