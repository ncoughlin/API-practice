// The blog post that goes with this exercise is: 
// https://ncoughlin.com/intro-to-apis/

//-----------------------------------
//SETUP
//-----------------------------------

var request = require('request');


//-----------------------------------
//API REQUESTS
//-----------------------------------

request('http://swapi.co/api/films/', function (error, response, body) {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  
  var parsedBody = JSON.parse(body);
  
 // console.log(parsedBody["results"][0]["title"]);
  
 // console.log(parsedBody["results"].length);
  
  for(var i=0;i<parsedBody["results"].length;i++){
  console.log(parsedBody["results"][i]["title"]);
  }
  
});

