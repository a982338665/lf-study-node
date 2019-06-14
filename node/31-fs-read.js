
/*!
 */

var fs = require('fs')

//异步读取
fs.readFile('./file/input.txt',function (err,data) {
    if(err){
        return console.error(err)
    }
    console.log('异步读取：'+data.toString())
})

//同步读取
var data = fs.readFileSync('./file/input.txt')
console.log('同步读取：'+data.toString())
console.log("执行结束！")
