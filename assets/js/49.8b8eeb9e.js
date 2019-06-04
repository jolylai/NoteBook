(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{305:function(e,t,s){e.exports=s.p+"assets/img/devops.9cd0e781.png"},390:function(e,t,s){"use strict";s.r(t);var n=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start","aria-hidden":"true"}},[this._v("#")]),this._v(" Start")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"get-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-docker","aria-hidden":"true"}},[this._v("#")]),this._v(" Get Docker")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"ubuntu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu","aria-hidden":"true"}},[this._v("#")]),this._v(" Ubuntu")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# sudo 普通用户希望用root权限执行")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# wget 下载命令")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -qO(字母) 限制输出跟普通输出")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# | sh 用SH的方式执行")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" -qO- https://get.docker.com "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" sh\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 这个命令的意思是把当前用户加入docker用户组。")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("usermod")]),e._v(" -aG docker 用户名\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 安装 docker-compose")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" https://github.com/docker/compose\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"centos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos","aria-hidden":"true"}},[this._v("#")]),this._v(" CentOS")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# CentOS7 系统 CentOS-Extras 库中已带 Docker，可以直接安装：")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" docker\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 安装之后启动 Docker 服务，并让它随系统启动自动加载。")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v(" docker start\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("chkconfig")]),e._v(" docker on\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(305),alt:"devops"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Docker image")]),this._v(": It is an executable file which contains cutdown operating system and all the libraries and configuration needed to run the application. It has multiple layers stacked on top of each other and represented as single object. A docker image is created using docker file, we will get to that in a bit.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Docker Container")]),this._v(": It is a running instance of docker image. there can be many containers running from same docker image.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile","aria-hidden":"true"}},[this._v("#")]),this._v(" Dockerfile")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("ADD")]),e._v(" "),s("li",[e._v("COPY")]),e._v(" "),s("li",[e._v("ENV")]),e._v(" "),s("li",[e._v("EXPOSE")]),e._v(" "),s("li",[e._v("FROM")]),e._v(" "),s("li",[e._v("LABEL")]),e._v(" "),s("li",[e._v("STOPSIGNAL")]),e._v(" "),s("li",[e._v("USER")]),e._v(" "),s("li",[e._v("VOLUME")]),e._v(" "),s("li",[e._v("WORKDIR")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-Dockerfile line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# pulls node.js docker image from docker hub\nFROM node:8\n\n# The ARG instruction defines a variable\n# that users can pass at build-time to the builder with the\n# `docker build` command using the --build-arg <varname>=<value> flag.\n# docker build --build-arg ENV_TAG=prod .\nARG ENV_TAG\nENV ENV_TAG ${ENV_TAG}\nWORKDIR /app\nCOPY package.json /app\nRUN npm install\nCOPY . /app\nEXPOSE 8081\nCMD node index.js\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#image","aria-hidden":"true"}},[this._v("#")]),this._v(" Image")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#container","aria-hidden":"true"}},[this._v("#")]),this._v(" Container")])}],a=s(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._m(4),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),s("p",[e._v("Environment variables are supported by the following list of instructions in the "),s("a",{attrs:{href:"https://docs.docker.com/engine/reference/builder/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dockerfile"),s("OutboundLink")],1),e._v(":")]),e._v(" "),e._m(11),e._v(" "),s("p",[e._v("For example")]),e._v(" "),e._m(12),e._m(13),e._v(" "),e._m(14)])},n,!1,null,null,null);t.default=r.exports}}]);