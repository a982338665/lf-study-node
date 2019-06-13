
/*!
    node文件模块化：
    第一种：exports 是模块公开的接口
    第二种：将对象封装到模块中
    exports.a ==== module.exports.a
 */

function a(name) {
    console.log('a -- hello world! '+name)
}
function b(name) {
    console.log('b -- hello world! '+name)
}
function c() {
    var name;
    this.setName = function (thyName) {
        name = thyName
    }
    this.sayHello = function () {
        console.log('Hello '+name)
    }
}
module.exports.a = a
module.exports.b = b
exports.c =c