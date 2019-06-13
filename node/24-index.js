
/*!
    node 路由 解析
    String string = http://localhost:8888/start?foo=bar&hello=3
    url.parse(string).pathname = /start
    url.parse(string).query    = foo=bar&hello=3
    querystring.parse(string)["foo"] = bar
 */

var server = require("./22-server")
var route = require("./23-route")
route.route("xxx")
server.start(route.route)