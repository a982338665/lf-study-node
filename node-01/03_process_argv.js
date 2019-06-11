//接收命令行参数
console.log(process.argv);

//获取命令中下标为2的参数 --》为字符串需要转义相加
console.log(process.argv[2]);                                       //1
console.log(process.argv[3]);                                       //2
console.log(process.argv[3]+process.argv[2]);                       //21

console.log(process.argv[3]-0+(process.argv[2]-0));                 //3

//两秒后定时输出
setTimeout(()=>{
    console.log(parseInt(process.argv[3])+parseInt(process.argv[2]))  //3
},2000)


//命令执行
// D:\git-20181009\node\node-01>node ./03_process_argv.js 1 2 3 4
//     [ 'D:\\install-soft\\nodejs\\node.exe',                  --node
//     'D:\\git-20181009\\node\\node-01\\03_process_argv.js',   --./03_process_argv.js
//     '1',                                                     --1
//     '2',                                                     --2
//     '3',                                                     --3
//     '4' ]                                                    --4
