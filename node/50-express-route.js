
/*!
      Express是一个简洁的Web框架 使用它可以快速完整的搭建网站
      核心特点：
        1.设置中间件响应http请求
        2.定义了路由表用于执行不同的http 请求动作
        3.通过模板传递参数 动态渲染html文件
      安装express:
        $ cnpm install express --save
        $ cnpm install body-parser --save        node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
        $ cnpm install cookie-parser --save      这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
        $ cnpm install multer --save            node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据
        $ cnpm list express     查看下 express 使用的版本号
 */

var express = require('express');
var app = express();

//监听 的 请求的方式 及 路径 及响应内容
//  主页输出 "Hello World"
app.get('/', function (req, res) {
    res.send('Hello World');
});

//  POST 请求
app.post('/', function (req, res) {
    console.log("主页 POST 请求");
    res.send('Hello POST');
});

//  /del_user 页面响应
app.get('/del_user', function (req, res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面');
});

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
    console.log("/list_user GET 请求");
    res.send('用户列表页面');
});

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
});

//启动的服务
var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});