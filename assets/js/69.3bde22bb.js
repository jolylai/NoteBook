(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{374:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[s._m(0),s._v(" "),a("p",[s._v("Git 是目前世界上最先进的分布式版本控制系统。记录一些在实际开发中比较实用且容易忘记的命令")]),s._v(" "),s._m(1),s._v(" "),s._m(2),a("hr"),s._v(" "),s._m(3),s._v(" "),s._m(4),s._m(5),s._v(" "),s._m(6),a("hr"),s._v(" "),s._m(7),s._v(" "),s._m(8),s._m(9),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://yanhaijing.com/git/2016/02/17/my-commit-message/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Commit 规范"),a("OutboundLink")],1)])]),s._v(" "),s._m(10),s._v(" "),s._m(11),s._m(12),s._v(" "),s._m(13),s._m(14),s._v(" "),s._m(15),s._v(" "),a("blockquote",[a("p",[s._v("也可使用"),a("a",{attrs:{href:"https://gitmoji.carloscuesta.me/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Gitmoji"),a("OutboundLink")],1),s._v("添加 emoji")])]),s._v(" "),s._m(16),s._v(" "),a("p",[s._v("Body 部分是对本次 commit 的详细描述，可以分成多行。")]),s._v(" "),s._m(17),s._v(" "),a("p",[s._v("Footer 部分只用于两种情况：")]),s._v(" "),s._m(18)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git","aria-hidden":"true"}},[this._v("#")]),this._v(" Git")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"首次提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首次提交","aria-hidden":"true"}},[this._v("#")]),this._v(" 首次提交")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("  "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"# NoteBook"')]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v(">>")]),s._v(" README.md\n  "),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n  "),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" add "),a("span",{attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n  "),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{attrs:{class:"token string"}},[s._v('"first commit"')]),s._v("\n  "),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" remote add origin https://github.com/jolylai/notebook.git\n  "),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"修改远程地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改远程地址","aria-hidden":"true"}},[this._v("#")]),this._v(" 修改远程地址")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# git remote set-url origin https://github.com/jolylai/notebook.git")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" remote set-url origin "),a("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("new url"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"版本回退"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本回退","aria-hidden":"true"}},[this._v("#")]),this._v(" 版本回退")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# 回退到上一个版本")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard HEAD^\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 回退到上上一个版本")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard HEAD^^\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 版本库的状态")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" log\n\ncommit e475afc93c209a690c39c13a46716e8fa000c366 "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" master"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nAuthor: Michael Liao "),a("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("askxuefeng@gmail.com"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Fri May 18 21:03:36 2018 +0800\n\n    add distributed\n\ncommit eaadf4e385e865d25c48e7ca9c8395c3f7dfaef0\nAuthor: Michael Liao "),a("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("askxuefeng@gmail.com"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Fri May 18 20:59:18 2018 +0800\n\n    wrote a readme "),a("span",{attrs:{class:"token function"}},[s._v("file")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 回到指定版本")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 版本号没必要写全，前几位就可以了，Git会自动去找。")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 当然也不能只写前一两位，因为Git可能会找到多个版本号，就无法确定是哪一个了。")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard 1094a\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 强制提交")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f -u origin master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config","aria-hidden":"true"}},[this._v("#")]),this._v(" Config")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),a("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("your name"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),a("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("your_email@example.com"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global push.default simple\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.quotepath "),a("span",{attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.editor /usr/bin/vim\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global credential.helper store\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global credential.helper wincred\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.ignorecase "),a("span",{attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 设置大小写敏感，保持 Mac/Win/Linux一致性；在目录名大小写修改时，git可正常提交；")]),s._v("\n$ "),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.ignorecase "),a("span",{attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"commit-规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commit-规范","aria-hidden":"true"}},[this._v("#")]),this._v(" Commit 规范")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#格式","aria-hidden":"true"}},[this._v("#")]),this._v(" 格式")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("<Header>\n\n<Body>\n\n<Footer>\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br"),t("span",{staticClass:"line-number"},[this._v("3")]),t("br"),t("span",{staticClass:"line-number"},[this._v("4")]),t("br"),t("span",{staticClass:"line-number"},[this._v("5")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[this._v("#")]),this._v(" 示例")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-git line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[s._v("\x3c!-- header --\x3e\nfeat: 添加了分享功能\n\n\x3c!-- body --\x3e\n给每篇博文添加了分享功能\n\n"),a("span",{attrs:{class:"token deleted"}},[s._v("- 添加分享到微博功能")]),s._v("\n"),a("span",{attrs:{class:"token deleted"}},[s._v("- 添加分享到微信功能")]),s._v("\n"),a("span",{attrs:{class:"token deleted"}},[s._v("- 添加分享到朋友圈功能")]),s._v("\n\n\x3c!-- footer --\x3e\nIssue #1, #2\nClose #1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"header-⭐️"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#header-⭐️","aria-hidden":"true"}},[this._v("#")]),this._v(" Header ⭐️")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[s._v("feat：新功能（feature）")]),s._v(" "),a("li",[s._v("fix：修补 bug")]),s._v(" "),a("li",[s._v("doc：文档（documentation）")]),s._v(" "),a("li",[s._v("style： 格式（不影响代码运行的变动）")]),s._v(" "),a("li",[s._v("refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）")]),s._v(" "),a("li",[s._v("test：增加测试")]),s._v(" "),a("li",[s._v("chore：构建过程或辅助工具的变动")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"body"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#body","aria-hidden":"true"}},[this._v("#")]),this._v(" Body")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"footer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#footer","aria-hidden":"true"}},[this._v("#")]),this._v(" Footer")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("关联 Issue")]),this._v(" "),t("li",[this._v("关闭 Issue")])])}],!1,null,null,null);t.default=e.exports}}]);