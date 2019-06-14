
/*!
    创建目录
    fs.mkdir(path,options,callback)
    options:
      recursive 是否以递归方式创建目录。默认为false
      mode  设置目录权限 默认为0777
 */

var fs = require('fs');

//非递归创建 --> 若该目录存在则报错
fs.mkdir('./testfile',(err)=>{
   // if (err) throw err;
   console.log("目录创建成功!")
});
//非递归创建 --> 父级目录testfile1 不存在也报错
fs.mkdir('./testfile1/hello',(err)=>{
   // if (err) throw err;
   console.log("目录创建成功!")
});
//递归创建 --> 存在则不创建(不报错)，不存在则递归创建
fs.mkdir('./testfile1/hello',{recursive:true},(err)=>{
   if (err) throw err;
   console.log("递归目录创建成功!")
});