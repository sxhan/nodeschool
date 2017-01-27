var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {

    fs.readdir(dir, function(err, data) {
        if (err) return callback(err);
        data = data.filter(function(x) {
            return path.extname(x) == '.' + ext;
        })
        for (i = 0; i < filtered.length; i++) {
            files.push(filtered[i]);
        }
        return callback(null, files);
    })
}

// official solution
var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })
    callback(null, list)
  })
}
