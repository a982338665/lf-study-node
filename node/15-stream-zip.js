
/*!
    链式流
    链式 是通过连接输出流 到另外一个流 并创建多个流操作链的机制
 */
var fs = require('fs')
var zlib = require('zlib')

//压缩文件
fs.createReadStream('./file/input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./file/input.txt.gz'))

console.log('文件压缩完成！')