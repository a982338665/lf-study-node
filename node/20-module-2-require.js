
/*!
    node文件模块化：
    第一种：require 用于从外部获取一个模块公开的接口 即exports对象
 */

var hello = require('./19-module-2')

hello.a('李强');
hello.b('李雨');

//exports对象获取
var c=new hello.c();
c.setName("hello")
c.sayHello()