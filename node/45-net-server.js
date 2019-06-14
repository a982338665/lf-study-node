/*!
*/

var net = require("net");

net.createServer(
    (connection)=>{
        console.log("客户端已连接！");
        connection.on("end",()=>{
            console.log('客户端已关闭连接！')
        })
        connection.write('Hello World!\r\n');
        connection.pipe(connection);
    }
).listen(8888,()=>{
    console.log("server is listenering ...8888")
});