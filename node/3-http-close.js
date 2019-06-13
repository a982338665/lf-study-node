
/*!
    0.windows 关闭 node 服务
    1.根据端口号，查询进程信息命令：
        netstat -aon | findstr 8888
    2.根据pid杀死进程命令：
        taskkill /F /pid 进程号
 */

windowsServiceStop(8888);

const windowsServiceStop = function(port){

    let netstat_command = "netstat -aon | findstr "+port;
    console.log('查询服务进程...'+netstat_command);
    exec(netstat_command,{maxBuffer: 5000 * 1024},(err, stdout, stderr) => {
        if (err) {
            console.log('查询服务进程异常:'+err);
            return false;
        }
        let line = stdout.split('\n')[0]; //第一行信息
        console.log('查询成功，进程信息：'+line);

        let p=line.trim().split(/\s+/);
        let pid = p[4];
        if(!pid || pid.length == 0){
            console.log('获取进程id失败');
            return false;
        }

        let taskkill_command = 'taskkill /F /pid '+pid;
        console.log('关闭服务...'+taskkill_command);
        exec(taskkill_command,{maxBuffer: 5000 * 1024},function(err, stdout, stderr){
            if(err){
                console.log('关闭服务异常：'+err);
                return false;
            }
            console.log('服务关闭成功');
            return true;
        });
    });

}