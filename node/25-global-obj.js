
/*!
    node 全局对象：
    不要使用var定义变量 以避免引入全局变量 ，会污染命名空间，提高代码耦合风险
 */

var projectName = "Test project";
global.projectName = projectName;

console.log(global.projectName);
console.log(__dirname);     // 当前路径
console.log(__filename);    // 当前在执行的js文件路径

//全局函数
function printHello(mm) {
    console.log(mm/1000 +"秒后 print ： hello world！")
}
//两秒后执行，第三个参数为第一个参数的入参
// var t = setTimeout(printHello,2000,2000);
//清除定时器
// clearTimeout(t)
//每间隔几秒执行一次
var s = setInterval(printHello,1000,1000)
//10秒后清除  s 计时器 --> 9次
// 1秒后 print ： hello world！
// 1秒后 print ： hello world！
// 1秒后 print ： hello world！
// 1秒后 print ： hello world！
// 1秒后 print ： hello world！
// 1秒后 print ： hello world！
// 1秒后 print ： hello world！
// 1秒后 print ： hello world！
// 1秒后 print ： hello world！
setTimeout(function () {
    clearInterval(s)
},10000)

