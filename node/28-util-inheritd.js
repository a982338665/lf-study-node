
/*!
    1.node常用工具
    util.inherits --> 通过原型复制来实现继承
 */

var util = require('util')

function Base() {
    this.name = 'base'
    this.base = 1991
    this.sayHello = function () {
        console.log('hello '+this.name)
    }
}

//被继承的方法
Base.prototype.showName = function () {
    console.log(this.name)
}

function sub() {
    this.name = 'sub'
}

util.inherits(sub,Base)
var base = new Base();
base.sayHello();
base.showName()
console.log(base)
var sub =new sub();
sub.showName()
console.log(sub)
