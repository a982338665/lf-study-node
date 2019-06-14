/*!
    Express 提供了内置的中间件 express.static 来设置静态文件如：图片， CSS, JavaScript 等。
    你可以使用 express.static 中间件来设置静态文件路径。例如，如果你将图片， CSS, JavaScript
    文件放在 public 目录下，你可以这么写：
    app.use('/public', express.static('public'));

 */

var express = require('express');
var app = express();

//第一个参数：访问路径前缀
//第二个参数：静态文件所在位置
//访问：http://localhost:8081/public/img/1.jpg
app.use('/public', express.static('static'));

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})