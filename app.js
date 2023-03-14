const express = require('express');

const notFound = require('./src/middlewares/not-found');
const errHandler = require('./src/middlewares/err-handler');

const app = express();

app.use(notFound);
app.use(errHandler);

module.exports = app;
