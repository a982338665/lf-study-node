
/*!
    异步非阻塞
 */

var fs = require("fs");
fs.readFile('./file/input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("程序执行结束!");

