
/*!
 */

var counter = 10;

process.on('exit',function (code) {
    setTimeout(function () {
       console.log("该代码不会执行")
    },0)
    console.log('退出码：%d',code)
})

//输出到终端
process.stdout.write("hello world \n")
//获取执行参数
process.argv.forEach(function (val,index,array) {
    console.log(index +" : "+ val)
})

//获取执行路径
console.log(process.execPath)
//获取平台信息
console.log(process.platform)
//h获取当前目录
console.log(process.cwd())
//获取当前node版本
console.log(process.version)
//输出内存使用情况
console.log(process.memoryUsage())
