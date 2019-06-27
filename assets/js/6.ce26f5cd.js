(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{311:function(s,n,a){"use strict";a.r(n);var t=a(0),e=Object(t.a)({},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"content"},[s._m(0),s._v(" "),a("p",[s._v("项目开发完成之后，将项目部署到服务器上，供用户使用。")]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("ul",[a("li",[s._v("服务器系统："),a("a",{attrs:{href:"https://www.centos.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("centos7"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("web 服务器："),a("a",{attrs:{href:"https://www.nginx.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("nginx"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("VMware: 虚拟机")])])]),s._v(" "),s._m(1),s._v(" "),s._m(2),s._m(3),s._v(" "),a("h2",{attrs:{id:"安装-nginx-参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-nginx-参考","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装 nginx ("),a("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-7",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),a("OutboundLink")],1),s._v(")")]),s._v(" "),s._m(4),s._m(5),s._v(" "),a("p",[s._v("If you want to start serving your own pages or application through Nginx, you will want to know the locations of the Nginx configuration files and default server root directory.")]),s._v(" "),s._m(6),s._v(" "),s._m(7),s._v(" "),s._m(8),s._v(" "),s._m(9),s._v(" "),s._m(10),s._v(" "),s._m(11),s._v(" "),s._m(12),s._v(" "),s._m(13),s._v(" "),s._m(14),s._m(15),s._v(" "),s._m(16),s._m(17),s._v(" "),s._m(18),s._m(19)])},[function(){var s=this.$createElement,n=this._self._c||s;return n("h1",{attrs:{id:"项目上线"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目上线","aria-hidden":"true"}},[this._v("#")]),this._v(" 项目上线")])},function(){var s=this.$createElement,n=this._self._c||s;return n("h2",{attrs:{id:"链接远程服务器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#链接远程服务器","aria-hidden":"true"}},[this._v("#")]),this._v(" 链接远程服务器")])},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# 启动网卡")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 安装centos7 Minimal 需要先启动网卡，不然无法通过ip连接到服务器")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("ifup")]),s._v(" ens33\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 查看服务器中公网ip地址")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("# centos7中去除了ipconfig")]),s._v("\nip addr\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# ssh 用户名@服务器ip")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@192.168.162.128\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])},function(){var s=this.$createElement,n=this._self._c||s;return n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),n("ul",[n("li",[this._v("如果么有购买服务器可以用使用 VMware 在本地安装 centos7 系统供练习使用")]),this._v(" "),n("li",[this._v("windows 中命令行建议使用 XShell")])])])},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# 查看是否已经安装了nginx")]),s._v("\nnginx -v\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 安装nginx库")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" epel-release\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 安装nginx")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 启动nginx")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start nginx\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 查看nginx是否已经安装成功")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 如果成功页面上回显示nginx默认的页面 welcome to nginx")]),s._v("\nhttp://server_domain_name_or_IP/\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 如果页面上显示无法访问此网站，你可能还开着防火墙，你需要执行以下命令")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd --permanent --zone"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-service"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("http\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd --permanent --zone"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-service"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("https\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd --reload\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 启动centso7后自动启动nginx")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),a("span",{attrs:{class:"token function"}},[s._v("enable")]),s._v(" nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])])},function(){var s=this.$createElement,n=this._self._c||s;return n("h2",{attrs:{id:"nginx-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置","aria-hidden":"true"}},[this._v("#")]),this._v(" nginx 配置")])},function(){var s=this.$createElement,n=this._self._c||s;return n("h3",{attrs:{id:"default-server-root"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#default-server-root","aria-hidden":"true"}},[this._v("#")]),this._v(" Default Server Root")])},function(){var s=this.$createElement,n=this._self._c||s;return n("p",[this._v("The default server root directory is "),n("code",[this._v("/usr/share/nginx/html")]),this._v(". Files that are placed in there will be served on your web server. This location is specified in the default server block configuration file that ships with Nginx, which is located at "),n("code",[this._v("/etc/nginx/conf.d/default.conf")]),this._v(".")])},function(){var s=this.$createElement,n=this._self._c||s;return n("h3",{attrs:{id:"server-block-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#server-block-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Server Block Configuration")])},function(){var s=this.$createElement,n=this._self._c||s;return n("p",[this._v("Any additional server blocks, known as Virtual Hosts in Apache, can be added by creating new configuration files in "),n("code",[this._v("/etc/nginx/conf.d")]),this._v(". Files that end with .conf in that directory will be loaded when Nginx is started.")])},function(){var s=this.$createElement,n=this._self._c||s;return n("h3",{attrs:{id:"nginx-global-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-global-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Nginx Global Configuration")])},function(){var s=this.$createElement,n=this._self._c||s;return n("p",[this._v("The main Nginx configuration file is located at "),n("code",[this._v("/etc/nginx/nginx.conf")]),this._v(". This is where you can change settings like the user that runs the Nginx daemon processes, and the number of worker processes that get spawned when Nginx is running, among other things.")])},function(){var s=this.$createElement,n=this._self._c||s;return n("h2",{attrs:{id:"nginx-配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置文件","aria-hidden":"true"}},[this._v("#")]),this._v(" nginx 配置文件")])},function(){var s=this.$createElement,n=this._self._c||s;return n("h3",{attrs:{id:"基础设置说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础设置说明","aria-hidden":"true"}},[this._v("#")]),this._v(" 基础设置说明")])},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#运行用户\nuser www-data;\n#启动进程,通常设置成和cpu的数量相等\nworker_processes  1;\n\n#全局错误日志及PID文件\nerror_log  /var/log/nginx/error.log;\npid        /var/run/nginx.pid;\n\n#工作模式及连接数上限\nevents {\n    use   epoll;             #epoll是多路复用IO(I/O Multiplexing)中的一种方式,但是仅用于linux2.6以上内核,可以大大提高nginx的性能\n    worker_connections  1024;#单个后台worker process进程的最大并发链接数\n    # multi_accept on;\n}\n\n#设定http服务器，利用它的反向代理功能提供负载均衡支持\nhttp {\n     #设定mime类型,类型由mime.type文件定义\n    include       /etc/nginx/mime.types;\n    default_type  application/octet-stream;\n    #设定日志格式\n    access_log    /var/log/nginx/access.log;\n\n    #sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，对于普通应用，\n    #必须设为 on,如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，以平衡磁盘与网络I/O处理速度，降低系统的uptime.\n    sendfile        on;\n    #tcp_nopush     on;\n\n    #连接超时时间\n    #keepalive_timeout  0;\n    keepalive_timeout  65;\n    tcp_nodelay        on;\n\n    #开启gzip压缩\n    gzip  on;\n    gzip_disable "MSIE [1-6]\\.(?!.*SV1)";\n\n    #设定请求缓冲\n    client_header_buffer_size    1k;\n    large_client_header_buffers  4 4k;\n\n    include /etc/nginx/conf.d/*.conf;\n    include /etc/nginx/sites-enabled/*;\n\n    #设定负载均衡的服务器列表\n     upstream mysvr {\n    #weigth参数表示权值，权值越高被分配到的几率越大\n    #本机上的Squid开启3128端口\n    server 192.168.8.1:3128 weight=5;\n    server 192.168.8.2:80  weight=1;\n    server 192.168.8.3:80  weight=6;\n    }\n\n\n   server {\n    #侦听80端口\n        listen       80;\n        #定义使用www.xx.com访问\n        server_name  www.xx.com;\n\n        #设定本虚拟主机的访问日志\n        access_log  logs/www.xx.com.access.log  main;\n\n    #默认请求\n    location / {\n          root   /root;      #定义服务器的默认网站根目录位置\n          index index.php index.html index.htm;   #定义首页索引文件的名称\n\n          fastcgi_pass  www.xx.com;\n         fastcgi_param  SCRIPT_FILENAME  $document_root/$fastcgi_script_name;\n          include /etc/nginx/fastcgi_params;\n        }\n\n    # 定义错误提示页面\n    error_page   500 502 503 504 /50x.html;\n        location = /50x.html {\n        root   /root;\n    }\n\n    #静态文件，nginx自己处理\n    location ~ ^/(images|javascript|js|css|flash|media|static)/ {\n        root /var/www/virtual/htdocs;\n        #过期30天，静态文件不怎么更新，过期可以设大一点，如果频繁更新，则可以设置得小一点。\n        expires 30d;\n    }\n    #PHP 脚本请求全部转发到 FastCGI处理. 使用FastCGI默认配置.\n    location ~ \\.php$ {\n        root /root;\n        fastcgi_pass 127.0.0.1:9000;\n        fastcgi_index index.php;\n        fastcgi_param SCRIPT_FILENAME /home/www/www$fastcgi_script_name;\n        include fastcgi_params;\n    }\n    #设定查看Nginx状态的地址\n    location /NginxStatus {\n        stub_status            on;\n        access_log              on;\n        auth_basic              "NginxStatus";\n        auth_basic_user_file  conf/htpasswd;\n    }\n    #禁止访问 .htxxx 文件\n    location ~ /\\.ht {\n        deny all;\n    }\n\n     }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br")])])},function(){var s=this.$createElement,n=this._self._c||s;return n("h3",{attrs:{id:"设置负载均衡"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置负载均衡","aria-hidden":"true"}},[this._v("#")]),this._v(" 设置负载均衡")])},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#运行用户\nuser www-data;\n#启动进程,通常设置成和cpu的数量相等\nworker_processes  1;\n\n#全局错误日志及PID文件\nerror_log  /var/log/nginx/error.log;\npid        /var/run/nginx.pid;\n\n#工作模式及连接数上限\nevents {\n    use   epoll;             #epoll是多路复用IO(I/O Multiplexing)中的一种方式,但是仅用于linux2.6以上内核,可以大大提高nginx的性能\n    worker_connections  1024;#单个后台worker process进程的最大并发链接数\n    # multi_accept on;\n}\n\n#设定http服务器，利用它的反向代理功能提供负载均衡支持\nhttp {\n     #设定mime类型,类型由mime.type文件定义\n    include       /etc/nginx/mime.types;\n    default_type  application/octet-stream;\n    #设定日志格式\n    access_log    /var/log/nginx/access.log;\n\n    #sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，对于普通应用，\n    #必须设为 on,如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，以平衡磁盘与网络I/O处理速度，降低系统的uptime.\n    sendfile        on;\n    #tcp_nopush     on;\n\n    #连接超时时间\n    #keepalive_timeout  0;\n    keepalive_timeout  65;\n    tcp_nodelay        on;\n\n    #开启gzip压缩\n    gzip  on;\n    gzip_disable "MSIE [1-6]\\.(?!.*SV1)";\n\n    #设定请求缓冲\n    client_header_buffer_size    1k;\n    large_client_header_buffers  4 4k;\n\n    include /etc/nginx/conf.d/*.conf;\n    include /etc/nginx/sites-enabled/*;\n\n    #设定负载均衡的服务器列表\n     upstream mysvr {\n    #weigth参数表示权值，权值越高被分配到的几率越大\n    #本机上的Squid开启3128端口\n    server 192.168.8.1:3128 weight=5;\n    server 192.168.8.2:80  weight=1;\n    server 192.168.8.3:80  weight=6;\n    }\n\n\n   server {\n    #侦听80端口\n        listen       80;\n        #定义使用www.xx.com访问\n        server_name  www.xx.com;\n\n        #设定本虚拟主机的访问日志\n        access_log  logs/www.xx.com.access.log  main;\n\n    #默认请求\n    location / {\n          root   /root;      #定义服务器的默认网站根目录位置\n          index index.php index.html index.htm;   #定义首页索引文件的名称\n\n          fastcgi_pass  www.xx.com;\n         fastcgi_param  SCRIPT_FILENAME  $document_root/$fastcgi_script_name;\n          include /etc/nginx/fastcgi_params;\n        }\n\n    # 定义错误提示页面\n    error_page   500 502 503 504 /50x.html;\n        location = /50x.html {\n        root   /root;\n    }\n\n    #静态文件，nginx自己处理\n    location ~ ^/(images|javascript|js|css|flash|media|static)/ {\n        root /var/www/virtual/htdocs;\n        #过期30天，静态文件不怎么更新，过期可以设大一点，如果频繁更新，则可以设置得小一点。\n        expires 30d;\n    }\n    #PHP 脚本请求全部转发到 FastCGI处理. 使用FastCGI默认配置.\n    location ~ \\.php$ {\n        root /root;\n        fastcgi_pass 127.0.0.1:9000;\n        fastcgi_index index.php;\n        fastcgi_param SCRIPT_FILENAME /home/www/www$fastcgi_script_name;\n        include fastcgi_params;\n    }\n    #设定查看Nginx状态的地址\n    location /NginxStatus {\n        stub_status            on;\n        access_log              on;\n        auth_basic              "NginxStatus";\n        auth_basic_user_file  conf/htpasswd;\n    }\n    #禁止访问 .htxxx 文件\n    location ~ /\\.ht {\n        deny all;\n    }\n\n     }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br")])])},function(){var s=this.$createElement,n=this._self._c||s;return n("h2",{attrs:{id:"将项目从本地复制到服务器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#将项目从本地复制到服务器","aria-hidden":"true"}},[this._v("#")]),this._v(" 将项目从本地复制到服务器")])},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# scp [可选参数] file_source file_target")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 单个文件")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("scp")]),s._v(" local_file remote_username@remote_ip:remote_file\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 含有文件夹")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("scp")]),s._v(" -r local_file remote_username@remote_ip:remote_folder\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 没有指定用户名 需要输入用户名和密码")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("scp")]),s._v(" local_file remote_ip:remote_folder\n"),a("span",{attrs:{class:"token function"}},[s._v("scp")]),s._v(" local_file remote_ip:remote_file\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 从远程复制到本地")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("scp")]),s._v(" -r remote_username@remote_ip:remote_folder local_file\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("参数")]),s._v(" "),a("p",[s._v("-v 和大多数 linux 命令中的 -v 意思一样 , 用来显示进度 . 可以用来查看连接 , 认证 , 或是配置错误 .")]),s._v(" "),a("p",[s._v("-C 使能压缩选项 .")]),s._v(" "),a("p",[s._v("-P 选择端口 . 注意 -p 已经被 rcp 使用 .")]),s._v(" "),a("p",[s._v("-4 强行使用 IPV4 地址 .")]),s._v(" "),a("p",[s._v("-6 强行使用 IPV6 地址 .")])])}],!1,null,null,null);n.default=e.exports}}]);