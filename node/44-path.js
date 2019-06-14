/*!
path
*/

var path = require("path");

path.resolve('/foo/bar', './baz');
// 返回: '/foo/bar/baz'
path.resolve('/foo/bar', '/tmp/file/');
// 返回: '/tmp/file'
path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// 如果当前工作目录为 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'

// 用于将绝对路径转为相对路径，返回从 from 到 to 的相对路径（基于当前工作目录）。
// 在 Linux 上：
path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
// 返回: '../../impl/bbb'
// 在 Windows 上：
path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb');
// 返回: '..\\..\\impl\\bbb

// 格式化路径
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));
// 连接路径
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));
// 转换为绝对路径
console.log('resolve : ' + path.resolve('main.js'));
// 路径中文件的后缀名
console.log('ext name : ' + path.extname('main.js'));