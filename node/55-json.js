/*!
    JSON.parse()是从一字符串数据解析出json对象。
    JSON.stringify()是把一对象中解析出字符串。
 */

var testStr = '{"name": "willschang", "age":"32"}'
var obj = JSON.parse(testStr);
var cname =obj["name"];
console.log("解析json获取name："+cname);
console.log("json对象 -->"+obj);
var str = JSON.stringify(obj);
console.log("json-字符串 -->"+str);




