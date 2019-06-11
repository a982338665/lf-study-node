// 引入核心对象：path 在node.exe里面 ，已经编译在其中
const path = require("path");

//3段路径来自不同用户的输入 -- 拼接统一路径
const myPath = path.join(__dirname,"//one","//two");
const myPath1 = path.join(__dirname,"one","two.txt");
console.log(myPath)
console.log(myPath1)

//根据相对路径 返回绝对路径
const str = './xxx.js';
let temp = path.resolve(str);
console.log(temp)


//字符串转对象
let pathObj = path.parse(myPath1)
console.log(pathObj)
console.log(pathObj.base)
pathObj.base="three.txt"

// { root: 'D:\\',
//     dir: 'D:\\git-20181009\\node\\node-01\\one',
//     base: 'two.txt',
//     ext: '.txt',
//     name: 'two' }

//路径对象转字符串路径
let strrr = path.format(pathObj)
console.log(strrr)
