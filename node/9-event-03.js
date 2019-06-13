
/*!
  nodejs 事件循环
  nodejs 是单进程单线程应用程序 因为V8引擎提供的异步回调接口，通过这些接口可以处理大量并发，所以性能很好
  1.nodejs使用事件驱动模型，当webserver接收到请求 就关闭进行处理 ，然后去服务写一个请求
  2.当此请求处理完毕，放回处理队列，当到达队列开头，返回给用户
  3.此模型非常高小， 且拓展性很强，以为webserver不用等待任何读写操作，只需要一直接受请求(也被称为非阻塞IO，事件驱动IO)
 */

var events = require('events');
var eventEmitter = new events.EventEmitter();

// 监听器 #1
var listener1 = function listener1() {
    console.log('监听器 listener1 执行。');
}

// 监听器 #2
var listener2 = function listener2() {
    console.log('监听器 listener2 执行。');
}

// 绑定 connection 事件，处理函数为 listener1
eventEmitter.addListener('connection', listener1);

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);

var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 个监听器监听连接事件。");

// 处理 connection 事件
eventEmitter.emit('connection');

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");

// 触发连接事件
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");