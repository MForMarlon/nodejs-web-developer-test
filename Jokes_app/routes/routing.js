var express = require('express');
var fetch   = require('node-fetch');
var routing = express.Router();


routing.get('/',function(req,res){
  console.log("Received request");
  var url = 'http://official-joke-api.appspot.com/jokes/programming/ten';

  //Hitting the external website, processing the JSON and sending the response
  fetch(url)
    .then(res => res.json())
    .then(data => {
        res.send({ data });
    })
    .catch(err => {
        res.send(err);
    }); 
})

module.exports = routing;
