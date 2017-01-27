var fs = require('fs');
var path = process.argv[2];

function countNewlines(s) {
  return s.split('\n').length -1;
}

function callback (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(countNewlines(data));
  }
}

var data = fs.readFile(path, 'utf8', callback);
