/*!
    nodejs 默认不会解析请求体，很耗资源，需要自己做
 */

var http = require("http");
var querystring = require('querystring');
var util = require('util');

http.createServer((req, res) => {
    //定义一个post变量，暂存请求体信息
    var post = '';
    //通过req的data 事件监听函数，每当接受到请求体内容，累加到post变量
    req.on('data', (chunk) => {
        post += chunk;
    });
    //在end事件触发后，通过querystring.parse将post解析为真正的post请求格式，然后向客户端返回
    req.on('end',()=>{
        post = querystring.parse(post);
        console.log(post)
        console.log(post.a)
        console.log(post.b)
        res.end(util.inspect(post))
    })

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