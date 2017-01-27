var listFiles = require('./modularModule');
var path = process.argv[2]
var ext = process.argv[3]

listFiles(path, ext, function (err, data) {
    if (err) return console.error(err);
    data.forEach(function (f) {
        console.log(f);
    })
})

// Official solution
var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})
