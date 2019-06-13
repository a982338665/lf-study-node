
/*!
    Buffer缓冲区
    1.处理tcp流或文件流时，必须使用到二进制数据，因此在nodejs中定义一个buffer类，该类用来创建一个专门存放二进制数的缓冲区
    2.Buffer是随node内核发布的核心库
 */

const buf = Buffer.from('runoob','ascii');

console.log(buf.toString('hex'))
console.log(buf.toString('base64'))
console.log(buf.toString())
console.log(buf.toString('ascii'))
console.log(buf.toString('utf8'))

console.log('创建buffer...')
//创建一个长度为 10 ，且用0 填充的buffer
const buf1 = Buffer.alloc(10);
//创建一个长度为 10，且用0x1 填充的buffer
const buf2 = Buffer.alloc(10,1);
// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);
// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);
// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');
// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');

console.log('创建buffer... 结束！')
console.log('写入缓冲区...')
const buff = Buffer.alloc(256)
len = buff.write("www.baidu.com");
//从下标0开始，写入长度11，使用编码utf8
len2 = buff.write("www.baidu.com",0,11,'utf8');
console.log("写入字节="+len)
console.log("写入字节="+len2)
console.log("写入缓冲区...结束")


console.log("读取缓冲区...")
//此时读取的是第一次写入的数据
console.log(buff.toString())
const bufff= Buffer.alloc(256)
for(var i=0;i<26;i++){
    bufff[i] = i+97
}
console.log(bufff.toString())
console.log(bufff.toString('ascii',0,5))
console.log(bufff.toString('utf8',0,5))
console.log(bufff.toString(undefined,0,5))//默认utf8
console.log("读取缓冲区...结束")


console.log("Buffer-->JSON...")
const bufjson = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(bufjson);

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);
const copy = JSON.parse(json, (key, value) => {
    return value && value.type === 'Buffer' ?
        Buffer.from(value.data) :
        value;
});
const copy2 = JSON.parse(json, (key, value) => {
    return value && value.type === 'Buffer' ?
        value.data :
        value;
});
// 输出: <Buffer 01 02 03 04 05>
console.log(copy);
console.log(copy2);
console.log("Buffer-->JSON...结束！")


console.log("缓冲区合并...")
var buffer1 = Buffer.from(('1.菜鸟教程\n'));
var buffer2 = Buffer.from(('2.www.runoob.com'));
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: \n" + buffer3.toString());
console.log("缓冲区合并...结束！")

console.log("缓冲区比较...")
var buffer1 = Buffer.from('ABCD');
var buffer2 = Buffer.from('ABCD');
var result = buffer1.compare(buffer2);
console.log(result);
if(result < 0) {
    console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
    console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
    //其余情况为1
    console.log(buffer1 + " 在 " + buffer2 + "之后");
}
console.log("缓冲区比较...结束！")

console.log("copy缓冲区...")
var buf11 = Buffer.from('abcedfg')
var buf12 = Buffer.from('123456')
//buf12 插入替换到 buf11 的指定位置上
// buf12.copy(buf11,2)
//buf12 插到 buf11 的指定位置上，从第四个位置开始 ，插入替换buf12的 从下标0开始，长度为1
buf12.copy(buf11,4,0,1)
console.log(buf11.toString())
console.log("copy缓冲区...结束！")
