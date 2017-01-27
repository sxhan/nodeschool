var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = "." + process.argv[3];

function callback (err, list) {
  if (err) {
    console.log(err);
  } else {
    var filtered = list.filter(function (x) {
      return path.extname(x) == ext;
    })
    for (i = 0; i < filtered.length; i++) {
      console.log(filtered[i]);
    }
  }
}

fs.readdir(dir, callback);

// Official solution
// var fs = require('fs')
// var path = require('path')
//
// var folder = process.argv[2]
// var ext = '.' + process.argv[3]
//
// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })
