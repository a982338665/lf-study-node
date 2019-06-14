
/*!
    文件删除:文件不存在也显示成功！
 */

var fs = require('fs');

fs.unlink('./file/34-output.txt',(err)=>{
   console.log("删除成功!")
});