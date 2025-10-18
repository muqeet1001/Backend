const express = require('express');
const {connectToDb} = require('./db/db');
const UserRouter = require('./routes/auth');
const app = express();
connectToDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', UserRouter);
module.exports = app;