var net = require('net')
var strftime = require('strftime')
var server = net.createServer(function (socket) {
    var date = new Date()
    socket.write(strftime('%Y-%m-%d %H:%M', date))
    socket.end('\n')
    // Alternatively, just socket.end(data)
})
server.listen(process.argv[2])

// // Official Solution
// var net = require('net')
//
// function zeroFill (i) {
//   return (i < 10 ? '0' : '') + i
// }
//
// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }
//
// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })
//
// server.listen(Number(process.argv[2]))
