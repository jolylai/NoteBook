(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{322:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"概览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概览","aria-hidden":"true"}},[s._v("#")]),s._v(" 概览")]),s._v(" "),a("h2",{attrs:{id:"生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期","aria-hidden":"true"}},[s._v("#")]),s._v(" 生命周期")]),s._v(" "),a("ul",[a("li",[s._v("OPTIONAL Install "),a("code",[s._v("apt addons")])]),s._v(" "),a("li",[s._v("OPTIONAL Install "),a("code",[s._v("cache components")])]),s._v(" "),a("li",[a("code",[s._v("before_install")])]),s._v(" "),a("li",[a("code",[s._v("install")])]),s._v(" "),a("li",[a("code",[s._v("before_script")])]),s._v(" "),a("li",[a("code",[s._v("script")])]),s._v(" "),a("li",[s._v("OPTIONAL "),a("code",[s._v("before_cache")]),s._v(" (for cleaning up cache)")]),s._v(" "),a("li",[a("code",[s._v("after_success")]),s._v(" or "),a("code",[s._v("after_failure")])]),s._v(" "),a("li",[s._v("OPTIONAL "),a("code",[s._v("before_deploy")])]),s._v(" "),a("li",[s._v("OPTIONAL "),a("code",[s._v("deploy")])]),s._v(" "),a("li",[s._v("OPTIONAL "),a("code",[s._v("after_deploy")])]),s._v(" "),a("li",[a("code",[s._v("after_script")])])]),s._v(" "),a("h2",{attrs:{id:"常用配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 常用配置")]),s._v(" "),a("h3",{attrs:{id:"添加授信主机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加授信主机","aria-hidden":"true"}},[s._v("#")]),s._v(" 添加授信主机")]),s._v(" "),a("p",[s._v("部署项目到自己服务器的时候需要添加")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[s._v("addons")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("ssh_known_hosts")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 106.12.140\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"部署到-gh-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署到-gh-pages","aria-hidden":"true"}},[s._v("#")]),s._v(" 部署到 gh-pages")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[s._v("deploy")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("provider")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pages\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("skip-cleanup")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("github-token")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"$GITHUB_TOKEN"')]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("keep-history")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("local_dir")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docs/.vuepress/dist\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("on")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[s._v("branch")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存","aria-hidden":"true"}},[s._v("#")]),s._v(" 缓存")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[s._v("cache")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("directories")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node_modules\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"文件压缩并上传至服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件压缩并上传至服务器","aria-hidden":"true"}},[s._v("#")]),s._v(" 文件压缩并上传至服务器")]),s._v(" "),a("p",[s._v("使用了一下，经常遇到 scp 很或者失败的问题")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[s._v("after_deploy")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cd public/\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" zip "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("r dist.zip .\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" chmod 600 ~/.ssh/id_rsa\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v(' ssh root@"$HOST" '),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("o StrictHostKeyChecking=no 'rm "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("rf /var/www/happy"),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("little"),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("stack/ && mkdir /var/www/happy"),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("little"),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("stack/'\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" scp "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("o stricthostkeychecking=no "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v('r dist.zip root@"$HOST"'),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/www/happy"),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("little"),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("stack/\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v(' ssh root@"$HOST" '),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("o StrictHostKeyChecking=no 'unzip "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("o "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("d /var/www/happy"),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("little"),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("stack /var/www/happy"),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("little"),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("stack/dist.zip'\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cd ..\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" yarn run notification\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板","aria-hidden":"true"}},[s._v("#")]),s._v(" 模板")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[s._v("language")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node_js\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("node_js")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("8")]),s._v("\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("cache")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("directories")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node_modules\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("sudo")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" required\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" docker\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("branches")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("only")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" master\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("addons")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("ssh_known_hosts")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 106.12.140\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("before_install")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" openssl aes"),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("256"),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cbc "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("K $encrypted_2a01126f8b17_key "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("iv $encrypted_2a01126f8b17_iv\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("in id_rsa.enc "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("out ~/.ssh/id_rsa "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("d\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" chmod 600 ~/.ssh/id_rsa\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" echo "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v('e "Host $HOST\\n\\tStrictHostKeyChecking no\\n" '),a("span",{attrs:{class:"token punctuation"}},[s._v(">")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")]),s._v(" ~/.ssh/config\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("install")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" yarn install\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("before_script")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("script")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" yarn run docs"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("build\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("before_cache")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("after_success")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" scp "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("o stricthostkeychecking=no "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v('r docs/.vuepress/dist root@"$HOST"'),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/root\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("after_failure")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("before_deploy")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("deploy")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("provider")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pages\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("skip-cleanup")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("github-token")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"$GITHUB_TOKEN"')]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("keep-history")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("local_dir")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docs/.vuepress/dist\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("on")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[s._v("branch")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" master\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("after_deploy")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" yarn run notification\n  "),a("span",{attrs:{class:"token comment"}},[s._v("# 执行服务器上的命令")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v(' ssh root@"$HOST" '),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("o StrictHostKeyChecking=no 'docker pull jolylai/notebook && docker run "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("d "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("p 80"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("80'\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("after_script")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br")])])])}],!1,null,null,null);t.default=e.exports}}]);