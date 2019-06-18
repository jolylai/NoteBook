(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{305:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"多重边框"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多重边框","aria-hidden":"true"}},[s._v("#")]),s._v(" 多重边框")]),s._v(" "),a("h2",{attrs:{id:"box-shadow-方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#box-shadow-方案","aria-hidden":"true"}},[s._v("#")]),s._v(" box-shadow 方案")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("// 额外模拟出边框所需要占据的空间\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yellowgreen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("box-shadow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0 0 0 10px blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 0 0 0 20px orange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  0 2px 5px 20px "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgba")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 0.6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),s._v(" "),a("DemoBlock",{attrs:{demo:"css-border-multiple"}}),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("📝")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow",target:"_blank",rel:"noopener noreferrer"}},[s._v("box-shadow"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("code",[s._v("box-shadow: 0 0 0 扩张半径 颜色")]),s._v("，即可得到一道实线边框")]),s._v(" "),a("li",[s._v("支持逗号分隔法，可以创建任意数量的投影")]),s._v(" "),a("li",[s._v("box-shadow 是层层叠加的，第一层投影位于最顶\n层，依次类推。")])])]),s._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("📝")]),s._v(" "),a("ul",[a("li",[s._v("投影的行为跟边框不完全一致，因为它不会影响布局，而且也不会\n受到 box-sizing 属性的影响。不过，你还是可以通过内边距或外边\n距（这取决于投影是内嵌和还是外扩的）来额外模拟出边框所需要\n占据的空间。")]),s._v(" "),a("li",[s._v("上述方法所创建出的假“边框”出现在元素的外圈。它们并不会响\n应鼠标事件，比如悬停或点击。如果这一点非常重要，你可以给\nbox-shadow 属性加上 inset 关键字，来使投影绘制在元素的内圈。\n请注意，此时你需要增加额外的内边距来腾出足够的空隙。")]),s._v(" "),a("li",[s._v("只能实现实线边框")])])]),s._v(" "),a("h2",{attrs:{id:"outline-方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outline-方案","aria-hidden":"true"}},[s._v("#")]),s._v(" outline 方案")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yellowgreen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("outline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10px solid orange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),s._v(" "),a("DemoBlock",{attrs:{demo:"css-border-outline"}}),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("📝")]),s._v(" "),a("ul",[a("li",[s._v("边框样式灵活，可以实现虚线等效果")]),s._v(" "),a("li",[s._v("你可以通过 outline-offset 属性来控制它跟元素边缘之间的间距，这个属性甚至可以接受负值。")])])]),s._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("📝")]),s._v(" "),a("ul",[a("li",[s._v("因为 outline 并不能接受用逗号分隔的多个值。如果我们需要获得更多层的边框，前一\n种方案就是我们唯一的选择了。")]),s._v(" "),a("li",[s._v("边框不一定会贴合 border-radius 属性产生的圆角，因此如果元素\n是圆角的，它的描边可能还是直角的"),a("DemoBlock",{attrs:{demo:"css-border-outline1"}})],1)])])],1)},[],!1,null,null,null);t.default=e.exports}}]);