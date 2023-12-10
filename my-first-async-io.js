
const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  const lines = contents.toString().split('\n').length - 1  // converts to a string, splits the string into an array of lines, and calculates the number of lines
  console.log(lines)
})