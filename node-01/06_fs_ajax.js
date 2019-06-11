const fs = require('fs');

fs.readFile('./05_path.js', (err, data)=> {
    if(err) throw err;//抛控制台返回异常信息
    console.log(data);//16进制数据
    console.log(data.toString());//获取字符串数据
    // console.log(data.toString('utf8'));//获取字符串数据
});

fs.readFile('./05_path.js','utf8', (err, data)=> {
    if(err) throw err;//抛控制台返回异常信息
    console.log(data);//16进制数据
});


//fs.writeFile(path,data||String,callback);
fs.writeFile('./test-01.js','console.log("文件写入完毕!");\n',(err)=>{
    if(err) throw err;//抛控制台返回异常信息
    console.log("文件写入完毕!");
})

//文件写入追加
//1.appendFile（path,data,callback）
fs.appendFile('./test-01.js','console.log("文件追加写入-01 完毕!");\n',(err)=>{
    if(err) throw err;//抛控制台返回异常信息
    console.log("文件追加写入-01 完毕!");
})
//2.原函数追加  {flag:'a'} 表示追加
fs.writeFile('./test-01.js','console.log("文件追加写入-02 完毕!");\n',{flag:'a'},(err)=>{
    if(err) throw err;//抛控制台返回异常信息
    console.log("文件追加写入-02 完毕!");
})