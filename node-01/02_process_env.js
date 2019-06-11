
//全局对象输出 --> 系统环境变量
// console.log(process.env)


//1.获取环境变量的关键值 --》可以根据不同变量申明区分不同机器
//相对var来说，var会自动提升全局变量，let不会，就是块级{}
let result = process.env.classpath;
//输出classPath环境变量配置
console.log(result)



//应用：根据不同变量区分不同机器，做不通的配置,例如日志，开发有，生产无

//执行命令
// node ./02_process_env.js



