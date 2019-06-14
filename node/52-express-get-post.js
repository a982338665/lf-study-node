/*!
    Express 提供了内置的中间件 express.static 来设置静态文件如：图片， CSS, JavaScript 等。
    你可以使用 express.static 中间件来设置静态文件路径。例如，如果你将图片， CSS, JavaScript
    文件放在 public 目录下，你可以这么写：
    app.use('/public', express.static('public'));

 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/get/index.htm', function (req, res) {
    res.sendFile(__dirname + "/html/" + "index-get.html");
})
app.get('/post/index.htm', function (req, res) {
    res.sendFile(__dirname + "/html/" + "index-post.html");
})
app.post('/process_post', urlencodedParser, function (req, res) {
    // 输出 JSON 格式
    var response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
app.get('/process_get', function (req, res) {
    // 输出 JSON 格式
    var response = {
        "first_name": req.query.first_name,
        "last_name": req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})