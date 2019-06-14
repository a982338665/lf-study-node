
/*!
    读取目录
 */

var fs = require('fs');

//非递归读取 ==> 只读取当前目录下的   目录及文件
fs.readdir('./testfile1',(err,files)=>{
   files.forEach((file)=>{
      console.log(file)
   })
})
console.log("---------------------")