const exprees = require('express');
const routes = require('./routes/index.routes');
const app = exprees();
app.use((req,res,next)=>{
    console.log("it muqeet");
    next();
})
app.use('/',routes);
module.exports = app;