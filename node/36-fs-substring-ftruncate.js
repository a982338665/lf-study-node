
/*!
    len表示要截取的字符数
    fs.ftruncate(fd,len,callback)
 */

var fs = require('fs');
var buf = new Buffer.alloc(1024);

console.log('准备打开已存在文件...')
fs.open('./file/input.txt','r+',function (err,fd) {
    if(err){
        return console.error(err)
    }
    console.log('文件打开成功！\n 准备读取文件...')
    fs.ftruncate(fd,2,(err)=>{
        if(err) throw err;
        //读取截取的文件
        fs.read(fd,buf,0,buf.length,0,(err,bytes)=>{
            if (err) throw err;
            console.log(bytes+" 字节被读取")
            //输出读取字节
            if(bytes>0){
                console.log(buf.slice(0,bytes).toString())
            }
            //关闭文件
            fs.close(fd,(err)=>{
                if (err) throw err;
                console.log('文件关闭成功！')
            })
        })
     })
});
