var url = process.argv[2];
var http = require('http');

http.get(url, function (response) {
    stream = ""
    response.setEncoding('utf8');
    response.on("data", function (data) {
        stream += data;
    });
    response.on("error", console.error);
    response.on("end", function () {
        console.log(stream.toString().length);
        console.log(stream.toString());
    })
})
