
/*!
    fs.open(path,flags[,mode],callback)
    flags：
    r   读   不存在报错
    r+  读写 不存在报错
    rs  同步读取
    rs+ 同步读写
    w   写入打开，不存在创建
    wx  文件路劲存在，写入失败
    w+  读写，不存在创建
    wx+ 读写，存在则读写失败
    a   以追加模式打开 ，不存在则创建
    ax  以追加模式打开 ,存在则文件追加失败
    a+  以读取追加模式打开，不存在则创建
    ax+ 以读取追加模式打开，存在则文件读取追加失败
 */

var fs = require('fs')

//异步打开文件
console.log('准备打开文件...')
fs.open('./file/input.txt','r+',function (err,fd) {
    if(err){
        return console.error(err)
    }
    console.log('文件打开成功！')
})