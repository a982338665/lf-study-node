
/*!
    1.引入 required 模块：我们可以使用 require 指令来载入 Node.js 模块。
    2.创建服务器：服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器。
    3.接收请求与响应请求 服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据。
 */

var http = require("http");

//创建http服务 监听8888 端口
http.createServer(function (request,response) {

    //发送http头部
    response.writeHead(200,{'Content-Type':'text/plain'});

    //发送响应数据
    response.end('hello world \n');

}).listen(8888);

//启动 终端打印信息
console.log('Server running at http://localhost:8888/')


/*!
    访问服务：localhost:8888 显示
    hello world
 */