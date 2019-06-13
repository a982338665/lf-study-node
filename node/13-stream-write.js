
/*!
    nodejs stream 流
    1.stream有四种流类型
        1.可读
        2.可写
        3.可读写
        4.操作被写入数据，然后读出结果
 */
var fs = require('fs')
var data = 'mmp ,I want to sleep！'
//创建写入流
var writer = fs.createWriteStream('./file/output.txt')
writer.write(data,'utf8')
//标记文件末尾
writer.end("finished");
//处理流事件
writer.on('finish',function () {
    console.log('写入完成!')
})

writer.on('error',function (err) {
    console.log(err.stack)
})
console.log('程序执行完毕！')
