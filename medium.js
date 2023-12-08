const fs = require('fs'); //fs module 
fs.readFile('example.txt', 'utf8', function(err, data) {
  if (err) throw err; //checks error has occured 
  console.log(data);
});


