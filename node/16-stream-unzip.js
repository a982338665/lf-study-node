
/*!
    链式流
    链式 是通过连接输出流 到另外一个流 并创建多个流操作链的机制
 */
var fs = require('fs')
var zlib = require('zlib')

//压缩文件
fs.createReadStream('./file/input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('./file/unzip-input.txt'))

console.log('文件解压缩完成！')