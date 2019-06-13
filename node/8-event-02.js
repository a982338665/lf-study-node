
/*!
  nodejs 事件循环
  nodejs 是单进程单线程应用程序 因为V8引擎提供的异步回调接口，通过这些接口可以处理大量并发，所以性能很好
  1.nodejs使用事件驱动模型，当webserver接收到请求 就关闭进行处理 ，然后去服务写一个请求
  2.当此请求处理完毕，放回处理队列，当到达队列开头，返回给用户
  3.此模型非常高小， 且拓展性很强，以为webserver不用等待任何读写操作，只需要一直接受请求(也被称为非阻塞IO，事件驱动IO)
 */

//引入events 模块//event.js 文件
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener2', arg1, arg2);
});   // 多个事件监听器
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');   // 触发事件，传递参数