require('dotenv').config();

const express = require('express');

const app = express();

const cors = require('cors');

const { ErrorHandlerMidddleware } = require('./middleware/index');

// enable cors
app.use(cors());

// parse json body
app.use(express.json());

// catch all errors
app.use(ErrorHandlerMidddleware);

module.exports = app;