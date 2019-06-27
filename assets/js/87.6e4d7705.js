(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{392:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("DemoBlock",{attrs:{demo:"css-border-multiple"}}),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("📝")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow",target:"_blank",rel:"noopener noreferrer"}},[t._v("box-shadow"),a("OutboundLink")],1)]),t._v(" "),t._m(3),t._v(" "),a("li",[t._v("支持逗号分隔法，可以创建任意数量的投影")]),t._v(" "),a("li",[t._v("box-shadow 是层层叠加的，第一层投影位于最顶\n层，依次类推。")])])]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("DemoBlock",{attrs:{demo:"css-border-outline"}}),t._v(" "),t._m(7),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("📝")]),t._v(" "),a("ul",[a("li",[t._v("因为 outline 并不能接受用逗号分隔的多个值。如果我们需要获得更多层的边框，前一\n种方案就是我们唯一的选择了。")]),t._v(" "),a("li",[t._v("边框不一定会贴合 border-radius 属性产生的圆角，因此如果元素\n是圆角的，它的描边可能还是直角的"),a("DemoBlock",{attrs:{demo:"css-border-outline1"}})],1)])])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"多重边框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多重边框","aria-hidden":"true"}},[this._v("#")]),this._v(" 多重边框")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"box-shadow-方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#box-shadow-方案","aria-hidden":"true"}},[this._v("#")]),this._v(" box-shadow 方案")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("// 额外模拟出边框所需要占据的空间\n"),a("span",{attrs:{class:"token property"}},[t._v("margin")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token property"}},[t._v("background")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yellowgreen"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token property"}},[t._v("box-shadow")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0 0 10px blue, 0 0 0 20px orange,\n  0 2px 5px 20px "),a("span",{attrs:{class:"token function"}},[t._v("rgba")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0, 0, 0, 0.6"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("box-shadow: 0 0 0 扩张半径 颜色")]),this._v("，即可得到一道实线边框")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("📝")]),this._v(" "),s("ul",[s("li",[this._v("投影的行为跟边框不完全一致，因为它不会影响布局，而且也不会\n受到 box-sizing 属性的影响。不过，你还是可以通过内边距或外边\n距（这取决于投影是内嵌和还是外扩的）来额外模拟出边框所需要\n占据的空间。")]),this._v(" "),s("li",[this._v("上述方法所创建出的假“边框”出现在元素的外圈。它们并不会响\n应鼠标事件，比如悬停或点击。如果这一点非常重要，你可以给\nbox-shadow 属性加上 inset 关键字，来使投影绘制在元素的内圈。\n请注意，此时你需要增加额外的内边距来腾出足够的空隙。")]),this._v(" "),s("li",[this._v("只能实现实线边框")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"outline-方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outline-方案","aria-hidden":"true"}},[this._v("#")]),this._v(" outline 方案")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v("margin")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token property"}},[t._v("padding")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token property"}},[t._v("background")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yellowgreen"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token property"}},[t._v("outline")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px solid orange"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token property"}},[t._v("border-radius")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("📝")]),this._v(" "),s("ul",[s("li",[this._v("边框样式灵活，可以实现虚线等效果")]),this._v(" "),s("li",[this._v("你可以通过 outline-offset 属性来控制它跟元素边缘之间的间距，这个属性甚至可以接受负值。")])])])}],!1,null,null,null);s.default=e.exports}}]);