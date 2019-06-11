const fs = require('fs');


console.log("同步读取前..");
fs.readFileSync('./test-01.js', "utf8");
console.log("阻塞");
console.log("同步读取后");


console.log("异步读取前..");
fs.readFile('./test-01.js', "utf8",()=>{
    console.log("异步读取后");
});
console.log("不阻塞")