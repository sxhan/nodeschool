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

// var http = require('http');
// var urls = [process.argv[2], process.argv[3], process.argv[4]];
// var holder = [];
// var count = 1;
// var endCount = 0;
// for(var i in urls){
//
// responseCount(i, urls[i])
//
// }
//
// function responseCount(count, url){
// http.get(url, function(res){
//     res.setEncoding('utf8');
//
//     var string = '';
//     res.on('data', function(chunk){
//
//         string += chunk;
//
//     });
//
//     res.on('end', function(){
//         holder[count] = string;
//         endCount ++;
//         if(endCount >= 3){
//             for(var i in holder){
//                 console.log(holder[i]);
//             }
//
//         }
//     })
//
//
// }).on('error', function(e) {
//   console.log("Got error: " + e.message);
// });
// }
