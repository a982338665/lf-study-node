
/*!
    node 路由 解析
    String string = http://localhost:8888/start?foo=bar&hello=3
    url.parse(string).pathname = /start
    url.parse(string).query    = foo=bar&hello=3
    querystring.parse(string)["foo"] = bar
 */

function route(pathname) {
    console.log("about to route a request for "+pathname)
}

exports.route = route