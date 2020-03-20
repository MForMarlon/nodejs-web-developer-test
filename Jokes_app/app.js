var express = require('express');
var cors = require('cors');

//Imports
var router = require('./routes/routing.js');
var errorHandler = require('./routes/errorHandler.js');

//Creating an instance of express
var app = express();

//Using CORS for cross-origin resource sharing
app.use(cors());

//Setting up route for getData
app.use('/getData',router);

//Handling errors if any
app.use(errorHandler);

console.log("Server started at 3000");
app.listen(3000);
