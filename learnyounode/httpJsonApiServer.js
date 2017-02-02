var port = process.argv[2]
var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
    if (req.method !== 'GET') {
        return res.end('send me a GET\n')
    }
    var parsed = url.parse(req.url, true)
    var content
    if (parsed.pathname === '/api/unixtime') {
        content = unixtimeHandler(parsed.query)
    } else if (parsed.pathname == '/api/parsetime') {
        content = parsetimeHandler(parsed.query)
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end("Invalid URL")
    }
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(content)
})

function parsetimeHandler (qParams) {
    if ('iso' in qParams) {
        var datetime = new Date(qParams['iso'])
        return JSON.stringify({'hour': datetime.getHours(datetime),
                               'minute': datetime.getMinutes(datetime),
                               'second': datetime.getSeconds(datetime)})
    }
    return ''
}

function unixtimeHandler (qParams) {
    if ('iso' in qParams) {
        var datetime = new Date(qParams['iso'])
        return JSON.stringify({"unixtime": datetime.getTime()})
    }
    return ''
}



server.listen(port)

var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}


// // Official Solutions
// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result
//
//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time)
//   }
//
//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
