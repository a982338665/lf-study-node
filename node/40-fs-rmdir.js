
/*!
    删除目录
 */

var fs = require('fs');

fs.rmdir("./testfile",(err)=>{
   // if(err) throw err;
   console.log('删除成功！')
})
//不能删除 含有内容的文件目录
fs.rmdir("./testfile1",(err)=>{
   if(err) throw err;
   console.log('删除成功！')
})