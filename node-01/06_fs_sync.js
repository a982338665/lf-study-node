const fs = require('fs');

//读 有异常catch
let data = fs.readFileSync('./test-01.js', "utf8");
console.log(data);
//写
fs.writeFileSync("./test-02.js",data);
console.log("文件复制成功");
