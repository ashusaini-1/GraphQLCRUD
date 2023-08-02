const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const graphRoutes=require('./routes/graphRoutes')
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', graphRoutes); // Use the routes module 

module.exports = app;
