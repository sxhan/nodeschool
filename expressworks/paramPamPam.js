var express = require('express');
var app = express();
var crypto = require('crypto');

// // Solution 1
// app.put('/message/:id', function (req, res) {
//     res.end(crypto
//         .createHash('sha1')
//         .update(new Date().toDateString() + req.params.id)
//         .digest('hex'));
// });

// Solution 2
app.param('id', function (req, res, next, id) {
  req.id = id
  next()
})

app.put('/message/:id', function (req, res, next) {
  res.end(crypto
      .createHash('sha1')
      .update(new Date().toDateString() + req.params.id)
      .digest('hex'));
})

app.listen(process.argv[2]);
