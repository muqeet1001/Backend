const express = require('express');
const connectToDb = require('./db/db');
const UserRoutes = require('./routes/index.routes')
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
connectToDb();
const app = express();
app.use(cookieParser());
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/',UserRoutes);
module.exports = app;
