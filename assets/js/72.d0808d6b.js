(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{377:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[a._v("#")]),a._v(" Install")]),a._v(" "),t("h2",{attrs:{id:"mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb","aria-hidden":"true"}},[a._v("#")]),a._v(" MongoDB")]),a._v(" "),t("h3",{attrs:{id:"下载官方镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载官方镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 下载官方镜像")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("docker pull mongo\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动","aria-hidden":"true"}},[a._v("#")]),a._v(" 启动")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("docker run "),t("span",{attrs:{class:"token operator"}},[a._v("-")]),a._v("p "),t("span",{attrs:{class:"token number"}},[a._v("27017")]),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{attrs:{class:"token number"}},[a._v("27017")]),a._v(" "),t("span",{attrs:{class:"token operator"}},[a._v("-")]),a._v("v "),t("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("LocalDirectoryPath"),t("span",{attrs:{class:"token operator"}},[a._v(">")]),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{attrs:{class:"token operator"}},[a._v("/")]),a._v("data"),t("span",{attrs:{class:"token operator"}},[a._v("/")]),a._v("db "),t("span",{attrs:{class:"token operator"}},[a._v("--")]),a._v("name docker_mongodb "),t("span",{attrs:{class:"token operator"}},[a._v("-")]),a._v("d mongo\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("strong",[a._v("Tip")])]),a._v(" "),t("ul",[t("li",[t("code",[a._v("-p")]),a._v(" 指定容器的端口映射，mongodb 默认端口为 27017")]),a._v(" "),t("li",[t("code",[a._v("-v")]),a._v(" 为设置容器的挂载目录，这里是将即本机中的"),t("code",[a._v("<LocalDirectoryPath>")]),a._v("目录挂载到容器中的/data/db 中，作为 mongodb 的存储目录")]),a._v(" "),t("li",[t("code",[a._v("--name")]),a._v(" 为设置该容器的名称")]),a._v(" "),t("li",[t("code",[a._v("-d")]),a._v(" 设置容器以守护进程方式运行")])]),a._v(" "),t("h3",{attrs:{id:"进入-mongo-交互模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进入-mongo-交互模式","aria-hidden":"true"}},[a._v("#")]),a._v(" "),t("strong",[a._v("进入 mongo 交互模式")])]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("docker "),t("span",{attrs:{class:"token function"}},[a._v("exec")]),a._v(" -it "),t("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v("CONTAINER NAME"),t("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" mongo admin\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])])}],!1,null,null,null);s.default=r.exports}}]);