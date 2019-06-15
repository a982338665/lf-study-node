// express_cookie.js 文件


var express      = require('express')
var cookieParser = require('cookie-parser')
var util = require('util');

var app = express()
app.use(cookieParser())

app.get('/a', function(req, res) {
    console.log("Cookies: " + util.inspect(req.cookies));
    console.log("Cookies: " + req.cookies);
})

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});