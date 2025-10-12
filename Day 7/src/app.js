const express = require('express');
const indexRoutes = require('../src/routes/index.routes.js');

const app = express();
 app.use('/',indexRoutes);
module.exports = app;