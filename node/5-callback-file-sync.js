
/*!
    node 的回调函数：
    1.node 的异步编程的直接体现就是回调
    2.回调函数一般作为最后一个参数存在
 */

var fs = require("fs");
var data = fs.readFileSync('./file/input.txt');
console.log(data.toString());
console.log("程序执行结束!");
