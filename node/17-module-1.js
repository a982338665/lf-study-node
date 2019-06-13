
/*!
    node文件模块化：
    第一种：exports 是模块公开的接口
    第二种：将对象封装到模块中
    exports.a ==== module.exports.a
 */

exports.a = function (name) {
    console.log('a -- hello world! '+name)
}
exports.b = function (name) {
    console.log('b -- hello world! '+name)
}
exports.c = function () {
    var name;
    this.setName = function (thyName) {
        name = thyName
    }
    this.sayHello = function () {
        console.log('Hello '+name)
    }
}


// function hello() {
//     var name;
//     this.setName = function (thyName) {
//         name = thyName
//     }
//     this.sayHello = function () {
//         console.log('Hello '+name)
//     }
// }
//
// module.exports = hello