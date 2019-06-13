
/*!
    node 路由 解析
    String string = http://localhost:8888/start?foo=bar&hello=3
    url.parse(string).pathname = /start
    url.parse(string).query    = foo=bar&hello=3
    querystring.parse(string)["foo"] = bar
 */

var http = require('http')
var url = require('url')

function start(route) {
    function onRequest(req,res) {
        var pathname = url.parse(req.url).pathname
        console.log("Request for "+pathname +" receiced")

        route(pathname)

        res.writeHead(200,{"Content-Type":"text/plain"})
        res.write("hello world")
        res.end()
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started in 8888...")
}
exports.start =start;