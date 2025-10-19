const express = require('express');
const {connectToDb} = require('./db/db');
const UserRouter = require('./routes/auth');
const cookieParser = require('cookie-parser');
const app = express();
connectToDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/', UserRouter);
 
module.exports = app;