
/*!
    fs.writeFile(file,data,[options],callback)
    1.此方法默认打开文件模式 w 即表示若文件存在，则会覆盖其内容
    参数：
    file:       文件名
    data:       写入文件的String或Buffer对象
    options:    该参数是一个对象，包含{encoding，mode,flag},默认编码utf8 模式0666 ，flag w
    callback:

 */

var fs = require('fs');
var path = './file/34-output.txt';

console.log('准备写入文件...');
fs.writeFile(path,'hello first line! \n',(err)=>{
    if (err) throw err;
    console.log("第一次写入文件成功！");
    fs.readFile(path,(err,data)=>{
        if (err) throw err;
        console.log("第一次写入文件读取成功:"+data.toString());
    });
    console.log('第二次文件写入追加 -->');
    fs.writeFile(path,'second line !',{flag:'a'},(err)=>{
        if (err) throw err;
        console.log("第二次写入追加 --> 成功！");
    })
});