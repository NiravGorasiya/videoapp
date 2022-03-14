const express = require('express')
const logger = require("./config/logger");
const morgan = require("morgan");
const app = express()
require("dotenv").config();


//models
const sequelize = require("./models/sequelize");

app.use(morgan("tiny"));

const prefix = process.env.API_PREFIX

app.get(prefix + '/', function (req, res) {
  res.status(200).send('Hello World')
})

app.all("*", (req, res) => {
  res.status(400).send("Not found this page");
});


app.listen(process.env.PORT || 3000, () => {
  logger.info("Listening on port " + process.env.PORT || 3000);
})
