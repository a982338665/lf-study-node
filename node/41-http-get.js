
/*!
    1.引入 required 模块：我们可以使用 require 指令来载入 Node.js 模块。
    2.创建服务器：服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器。
    3.接收请求与响应请求 服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据。
 */

var http = require("http");
var url = require('url');
var util = require('util');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf8'});
    //url对象解析
    var objuri = url.parse(req.url,true);
    //参数解析：
    var params = objuri.query;
    res.write("访问路径:"+objuri.pathname)
    res.write("\n参数a="+params.a)
    res.write("\n参数b="+params.b)

    var obj = util.inspect(objuri);
    res.end("\n"+obj)
}).listen(8888);

//启动 终端打印信息
console.log('Server running at http://localhost:8888/');

/*!
    访问：http://localhost:8888/path/xxx?a=1&b=2
    Url {
      protocol: null,
      slashes: null,
      auth: null,
      host: null,
      port: null,
      hostname: null,
      hash: null,
      search: '?a=1&b=2',
      query: { a: '1', b: '2' },
      pathname: '/path/xxx',
      path: '/path/xxx?a=1&b=2',
      href: '/path/xxx?a=1&b=2' }
 */