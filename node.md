#node - 菜鸟教程

**https://www.runoob.com/nodejs/nodejs-install-setup.html**

**1.npm 使用介绍：**
    
    1.下载第三方包到本地使用
    2.下载并安装别人编写的命令行程序 到本地使用
    3.上传自己编写的命令行或包到npm供别人使用
    
    4.测试安装成功：
        npm -v
    5.升级npm：
        linux :  sudo npm install npm -g 
        windows: npm install npm -g
        淘宝镜像命令：cnpm install npm -g
    6.npm命令安装模块
        npm install <moudle name>
        npm install express     --本地安装   
        npm install express -g  --全局安装
            --常用web框架模块
            --安装好 放于node_modules穆丽霞
            --使用：var express = require('express')
    7.安装错误解决：
        1.npm err! Error: connect ECONNERFUSED 127.0.0.1:8087
            解决：npm config set proxy null
    8.查看安装信息
        npm list -g         --查看所有全局安装的模块
        npm list <模块名>   --查看指定模块版本号
    9.卸载模块：
        npm uninstall <模块名>
            --卸载后 进入 node_modules目录下查看包是否还在 或用命令
            --npm ls
    10.更新模块
        npm update <模块名>
    11.搜索模块
        npm search <模块名>
    12.生成模块：
        创建模块，package.json 文件是必不可少的。我们可以使用 NPM 生成 package.json 文件，生成的文件包含了基本的结果。
        $ npm init
        This utility will walk you through creating a package.json file.
        It only covers the most common items, and tries to guess sensible defaults.
        
        See `npm help json` for definitive documentation on these fields
        and exactly what they do.
        
        Use `npm install <pkg> --save` afterwards to install a package and
        save it as a dependency in the package.json file.
        
        Press ^C at any time to quit.
        name: (node_modules) runoob                   # 模块名
        version: (1.0.0) 
        description: Node.js 测试模块(www.runoob.com)  # 描述
        entry point: (index.js) 
        test command: make test
        git repository: https://github.com/runoob/runoob.git  # Github 地址
        keywords: 
        author: 
        license: (ISC) 
        About to write to ……/node_modules/package.json:      # 生成地址
        
        {
          "name": "runoob",
          "version": "1.0.0",
          "description": "Node.js 测试模块(www.runoob.com)",
          ……
        }
        
        Is this ok? (yes) yes
        以上的信息，你需要根据你自己的情况输入。在最后输入 "yes" 后会生成 package.json 文件。
    13.接下来我们可以使用以下命令在 npm 资源库中注册用户（使用邮箱注册）：
       $ npm adduser
       Username: mcmohd
       Password:
       Email: (this IS public) mcmohd@gmail.com
       接下来我们就用以下命令来发布模块：
       $ npm publish
       如果你以上的步骤都操作正确，你就可以跟其他模块一样使用 npm 来安装。
    14.版本号
       使用NPM下载和发布代码时都会接触到版本号。NPM使用语义版本号来管理代码，这里简单介绍一下。
       语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。
       如果只是修复bug，需要更新Z位。
       如果是新增了功能，但是向下兼容，需要更新Y位。
       如果有大变动，向下不兼容，需要更新X位。
       版本号有了这个保证后，在申明第三方包依赖时，除了可依赖于一个固定版本号外，还可依赖于某个范围的版本号。例如"argv": "0.0.x"表示依赖于0.0.x系列的最新版argv。
       NPM支持的所有版本号范围指定方式可以查看官方文档。
    15.NPM 常用命令
       除了本章介绍的部分外，NPM还提供了很多功能，package.json里也有很多其它有用的字段。
       除了可以在npmjs.org/doc/查看官方文档外，这里再介绍一些NPM常用命令。
       NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。
       NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。
       使用npm help <command>可查看某条命令的详细帮助，例如npm help install。
       在package.json所在目录下使用npm install . -g可先在本地安装当前命令行程序，可用于发布前的本地测试。
       使用npm update <package>可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。
       使用npm update <package> -g可以把全局安装的对应命令行程序更新至最新版。
       使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
       使用npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码。
    16.使用淘宝 NPM 镜像
       大家都知道国内直接使用 npm 的官方镜像是非常慢的，这里推荐使用淘宝 NPM 镜像。
       淘宝 NPM 镜像是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。
       你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:
       $ npm install -g cnpm --registry=https://registry.npm.taobao.org
       这样就可以使用 cnpm 命令来安装模块了：
       $ cnpm install [name]
       
**2.node的模块系统:**

    1.为了使nodejs文件可以相互调用，提供了简单的模块系统
    2.模块是node的基本组成部分，即 一个node文件为一个模块，此文件可为js代码，json或编译过的c/c++拓展

**3.安装淘宝镜像 cnpm：**

    1.npm install -g cnpm --registry=https://registry.npm.taobao.org
    2.添加环境变量到 path