
/*!
    nodejs stream 流
    1.stream有四种流类型
        1.可读
        2.可写
        3.可读写
        4.操作被写入数据，然后读出结果
 */
var fs = require('fs')
var data = ''
//创建可读流
var reader = fs.createReadStream('.././file/input.txt')
//处理流事件
reader.on('data',function (chunk) {
    data+=chunk
})

reader.on('end',function () {
    console.log(data)
})

reader.on('error',function (err) {
    console.log(err.stack)
})

console.log('程序执行完毕！')
