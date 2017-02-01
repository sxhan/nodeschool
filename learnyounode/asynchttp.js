var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var http = require('http');

var counter = 3
var msgs = []

function get(url, idx) {
    http.get(url, function (response) {
        stream = ""
        response.setEncoding('utf8')
        response.on("data", function (data) {
            stream += data;
        })
        response.on("error", console.error)
        response.on("end", function () {
            counter --
            msgs[idx] = stream.toString()
            if (counter <= 0) {
                // console.log(msgs)
                for (var i in msgs) {
                    console.log(msgs[i])
                }
            }
        })
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    })
}


get(url1, 0)
get(url2, 1)
get(url3, 2)

// // Official Solution
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0
//
// function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }
//
// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }
//
//       results[index] = data.toString()
//       count++
//
//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }
//
// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }
