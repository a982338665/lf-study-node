
/*!
    获取文件基本信息；
    fs.stat(path,callback)
 */

var fs = require('fs')

fs.stat('./file/input.txt',function (err,stats) {
    if(err){
        return console.error(err)
    }
    console.log(stats)
    console.log('是否为文件：'+stats.isFile())
    console.log('是否为目录：'+stats.isDirectory())
})