
/*!
    1.REST是设计风格而不是标准。REST通常基于使用HTTP，URI，和XML（标准通用标记语言下的一个子集）
    以及HTML（标准通用标记语言下的一个应用）
    这些现有的广泛流行的协议和标准。REST 通常使用 JSON 数据格式。

    HTTP 方法
        以下为 REST 基本架构的四个方法：
            GET - 用于获取数据。
            PUT - 用于更新或添加数据。
            DELETE - 用于删除数据。
            POST - 用于添加数据。
 */

var express = require('express');
var app = express();
var fs = require("fs");

// 读取已存在的数据
app.get('/list',(req, res)=>{
    fs.readFile( __dirname + "/json/" + "users.json", 'utf8', function (err, data) {
        if(err) throw err;
        console.log( data );
        res.end( data );
    });
});


//添加的新用户数据
app.get('/add', function (req, res) {
    fs.readFile( __dirname + "/json/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["user4"] = user["user4"];
        console.log( data );
        res.end( JSON.stringify(data));
    });
});

//删除用户
app.get('/deleteUser', function (req, res) {
    fs.readFile( __dirname + "/json/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["user2"];
        console.log( data );
        res.end( JSON.stringify(data));
    });
});

//读取已存在用户 --> 参数拼接在路径上 如果在同一个 server.js 里创建多个 RESTful API ， 并且 :id 放在前边， 那么它会拦截其他的请求
app.get('/get/:id', function (req, res) {
    // 首先我们读取已存在的用户
    fs.readFile( __dirname + "/json/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        var user = data["user" + req.params.id]
        console.log( user );
        res.end( JSON.stringify(user));
    });
})


var user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    }
};

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log(__dirname)
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})