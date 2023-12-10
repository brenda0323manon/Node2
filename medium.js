const fs = require('fs'); //fs module 
fs.readFile('example.txt', 'utf8', function(err, data) { //function takes three arugument; file path, encoding type, and  callback function 
  if (err) throw err; //checks error if has occured 
  console.log(data);
});


