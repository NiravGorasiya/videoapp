const express = require('express')
require("dotenv").config();
const logger = require("./config/logger");
const morgan = require("morgan");
const app = express()
const handleErrors = require("../src/middlewares/handleErrors");
//models
const sequelize = require("./models/sequelize");

app.use(express.json())
app.use(morgan("tiny"));
const userRouter = require("./router/userRouter");

app.use(userRouter)


const prefix = process.env.API_PREFIX

//error-handling-middleware
app.use(handleErrors);

app.get(prefix + '/', function (req, res) {
  res.status(200).send('Hello World')
})

app.all("*", (req, res) => {
  res.status(400).send("Not found this page");
});

app.listen(process.env.PORT || 3000, () => {
  logger.info("Listening on port " + process.env.PORT || 3000);
})
