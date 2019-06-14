
/*!
    1.node常用工具
    util.inspect --> 将任意对象转化为字符串的方法 --> 可用于调试
 */

var util = require('util')

function Person() {
    this.name = 'lili'
    this.toString = function () {
        return this.name
    }
}

var obj = new Person()
console.log(obj)
console.log(util.inspect(obj))
console.log(util.inspect(obj,true))
/*!
    4个参数的意义：
    1.obj --> 要转换为字符串的对象
    2.showHidden --> true 表示会输出更多隐藏信息
    3.depth --> 表示最大递归层数，默认为2，为null表示不限次数完整便利对象
    4.color --> 为true表示颜色会更好看，易于辨识
 */
console.log(util.inspect(obj,true,null,true))

