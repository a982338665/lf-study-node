
/*!
    node 全局对象：
    不要使用var定义变量 以避免引入全局变量 ，会污染命名空间，提高代码耦合风险
 */

var counter = 10;
var counter2 = "qqq";
//counter替换%d
console.log("计数：%d 结束!",counter)
console.log("字符串：%s 结束!",counter2)

console.time("耗时计算：")
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.timeEnd("耗时计算：")
