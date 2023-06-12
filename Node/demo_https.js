// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080

// Importing the func.js module

// The ./ says that the func module
// is in the same directory as
// the main.js file
const f = require('./server');

// Require returns an object with add()
// and stores it in the f variable
// which is used to invoke the required

const result = f.add(10, 5);

console.log('The result is:', result);