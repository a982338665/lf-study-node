
/*!
    node 函数
    1.函数作为方法的参数传递
    2.http服务 --> 传入的即为匿名函数
 */

function say(word) {
    console.log("hello "+word)
}

function exec(funct,val) {
    funct(val)
}

//1.传递参数为 正常函数
exec(say,"猪八戒")
//2.传递参数为 匿名函数
exec(function (word) {
    console.log("hi "+word)
},"猴子")