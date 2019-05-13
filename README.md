# node

node 学习记录

**1.c++编写**

    nodejs.org
    npmjs.com
    github.com
    stackoverflow.com
        
    nodejs安装 以0.10.3X版本为例
    api讲解
    搭建小应用
    
    版本:
    偶数稳定:-0.6.X 0.8.X 0.10.X
    奇数不稳定:-0.7.X等

**2.windows安装nodejs：**

    nodejs.org 下载 安装
    cmd验证安装成功 v10.14.0
    node -v
    npm -v

**3.linux安装nodejs https://nodejs.org/dist/latest-v10.x/**
    
    1.cat /etc/redhat-release
    2.rpm -q gcc rpm -q gcc-c++
    3.yum -y install gcc gcc-c++ kernel-devel
    4.python -V
    5.yum -y update && yum -y groupinstall "Development Tools"
    6.cd /usr/local/nodejs
    7.wget https://nodejs.org/dist/latest-v10.x/node-v10.14.0-linux-x64.tar.gz
    8.tar -zxvf node-v10.14.0-linux-x64.tar.xz
    9.mv node-v10.14.0-linux-x64.tar.xz node
    
    ln -s /usr/local/nodejs/node/bin/node /usr/bin/node
    ln -s /usr/local/nodejs/node/bin/npm /usr/bin/npm
    或者
    vim /etc/profile
    export NODE_HOME=/usr/local/nodejs/node
    export PATH=$NODE_HOME/bin:$PATH
    wq!保存
    source /etc/profile
    
    14.node -v
    15.npm -v

**4.查看所有(指定)端口号占用情况:**

    netstat -tunlp
    netstat -tunlp|grep 端口号
    kill -9 pid

**5.JDK安装路径定位:**

    1.提前配置环境变量可使用:echo $JAVA_HOME	
    2.
    [root@iZ2ze9uuc43mja8vg9ytemZ /]# which java
    /usr/bin/java
    [root@iZ2ze9uuc43mja8vg9ytemZ /]# ls -lrt /usr/bin/java
    lrwxrwxrwx 1 root root 22 1月   4 11:24 /usr/bin/java -> /etc/alternatives/java
    [root@iZ2ze9uuc43mja8vg9ytemZ /]# ls -lrt /etc/alternatives/java
    lrwxrwxrwx 1 root root 46 1月   4 11:24 /etc/alternatives/java -> /usr/lib/jvm/jre-1.7.0-openjdk.x86_64/bin/java
    [root@iZ2ze9uuc43mja8vg9ytemZ /]#
    [root@iZ2ze9uuc43mja8vg9ytemZ /]#
    [root@iZ2ze9uuc43mja8vg9ytemZ /]#
    [root@iZ2ze9uuc43mja8vg9ytemZ /]# cd /usr/lib/jvm
    
    
    tomcat启动卡住:Deploying web application directory /opt/apache-tomcat-8.0.15-server/
    找到jdk安装路径。我的是 /jdk1.7.0_80/jre/lib/security，然后 vi java.security 
    修改如下：
    #securerandom.source=file:/dev/urandom
    securerandom.source=file:/dev/./urandom
    
**6.外网访问不了node的原因:**

    1.防火墙安全组规则
    2.node代码中配置主机名称为所有
    var app = new Koa();
    app.listen(5000, '0.0.0.0');

**7.使用node代码测试:**

    1.touch /usr/local/nodejs/node-work/server.js
    2.server.js内容:
    const http = require('http');
    const hostname = '0.0.0.0';
    const port = 8080;
    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World\n');
    });
    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
    3.使用命令: node server.js
    4.访问node服务











