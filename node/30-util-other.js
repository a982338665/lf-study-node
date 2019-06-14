
/*!
    1.node常用工具
    util.inspect --> 将任意对象转化为字符串的方法 --> 可用于调试
 */

var util = require('util');

//判断obj是否为数组
console.log(util.isArray([]));
console.log(util.isArray(new Array()));
console.log(util.isArray({}));//false

//判断是否为正则
console.log(util.isRegExp(/some regexp/));
console.log(util.isRegExp(new RegExp('another regexp')));

//判断是否为日期
console.log(util.isDate(new Date()));
console.log(util.isDate(Date()));//false

//判断是否为1个错误对象
console.log(util.isError(new Error()))
console.log(util.isError(new TypeError()))

