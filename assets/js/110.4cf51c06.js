(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{340:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"document-相关的宽高属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-相关的宽高属性","aria-hidden":"true"}},[t._v("#")]),t._v(" document 相关的宽高属性")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/60332df38393",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML 的各种宽高"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"documentelement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documentelement","aria-hidden":"true"}},[t._v("#")]),t._v(" documentElement")]),t._v(" "),a("p",[a("code",[t._v("Document.documentElement")]),t._v(" 是一个会返回文档对象（document）的根元素的只读属性（如 HTML 文档的 ")]),a("html",[t._v(" 元素）。"),a("p"),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rootElement "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client","aria-hidden":"true"}},[t._v("#")]),t._v(" client")]),t._v(" "),a("p",[t._v("需要考虑到滚动条的宽度")]),t._v(" "),a("h3",{attrs:{id:"htmlelement-clientwidth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#htmlelement-clientwidth","aria-hidden":"true"}},[t._v("#")]),t._v(" HTMLElement.clientWidth")]),t._v(" "),a("p",[a("code",[t._v("HTMLElement.clientWidth")]),t._v(" 属性表示元素的内部宽度，以像素计。该属性包括内边距，但不包括垂直滚动条（如果有）、边框和外边距（即 "),a("code",[t._v("content + padding")]),t._v("）。")]),t._v(" "),a("p",[t._v("如果出现滚动条，滚动条会遮盖元素的宽高，那么该属性就是其本来宽高减去滚动条的宽高")]),t._v(" "),a("h3",{attrs:{id:"htmlelement-clientheight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#htmlelement-clientheight","aria-hidden":"true"}},[t._v("#")]),t._v(" HTMLElement.clientHeight")]),t._v(" "),a("p",[a("code",[t._v("HTMLElement.clientHeight")]),t._v(" 属性表示元素的内部高度，以像素计。该属性包括内边距，但不包括垂直滚动条（如果有）、边框和外边距（即 "),a("code",[t._v("content + padding")]),t._v("）。")]),t._v(" "),a("p",[t._v("这一对属性是用来读取元素的 border 的宽度和高度的")]),t._v(" "),a("h3",{attrs:{id:"htmlelement-clientleft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#htmlelement-clientleft","aria-hidden":"true"}},[t._v("#")]),t._v(" HTMLElement.clientLeft")]),t._v(" "),a("p",[t._v("表示一个元素的左边框的宽度，以像素表示。如果元素的文本方向是从右向左（RTL, right-to-left），并且由于内容溢出导致左边出现了一个垂直滚动条，则该属性包括滚动条的宽度。clientLeft 不包括左外边距和左内边距。clientLeft 是只读的。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" body "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 即 CSS 中 border-left 的值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" borderLeft "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientLeft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 20")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"htmlelement-clienttop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#htmlelement-clienttop","aria-hidden":"true"}},[t._v("#")]),t._v(" HTMLElement.clientTop")]),t._v(" "),a("p",[t._v("一个元素顶部边框的宽度（以像素表示）。不包括顶部外边距或内边距。clientTop 是只读的。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" body "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 即 CSS 中 border-top 的值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" borderLeft "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 20")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"offset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#offset","aria-hidden":"true"}},[t._v("#")]),t._v(" offset")]),t._v(" "),a("h3",{attrs:{id:"htmlelement-offsetwidth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#htmlelement-offsetwidth","aria-hidden":"true"}},[t._v("#")]),t._v(" HTMLElement.offsetWidth")]),t._v(" "),a("p",[a("code",[t._v("HTMLElement.offsetWidth")]),t._v("是测量包含元素的边框(border)、水平线上的内边距(padding)、竖直方向滚动条(scrollbar)（如果存在的话）、以及 CSS 设置的宽度(width)的值。(即 "),a("code",[t._v("content + scrollbar + padding + border")]),t._v(")")]),t._v(" "),a("p",[t._v("各浏览器的 offsetWidth 可能有所不同，所有需要考虑兼容性")]),t._v(" "),a("h3",{attrs:{id:"htmlelement-offsetheight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#htmlelement-offsetheight","aria-hidden":"true"}},[t._v("#")]),t._v(" HTMLElement.offsetHeight")]),t._v(" "),a("p",[t._v("HTMLElement.offsetHeight 是一个只读属性，它返回该元素的像素高度，高度包含该元素的垂直内边距和边框，且是一个整数。")]),t._v(" "),a("p",[t._v("通常，元素的 offsetHeight 是一种元素 CSS 高度的衡量标准，包括元素的边框、内边距和元素的水平滚动条（如果存在且渲染的话），不包含:before 或:after 等伪类元素的高度。")]),t._v(" "),a("p",[t._v("对于文档的 body 对象，它包括代替元素的 CSS 高度线性总含量高。浮动元素的向下延伸内容高度是被忽略的。")]),t._v(" "),a("h3",{attrs:{id:"htmlelement-offsetparent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#htmlelement-offsetparent","aria-hidden":"true"}},[t._v("#")]),t._v(" HTMLElement.offsetParent")]),t._v(" "),a("p",[a("code",[t._v("HTMLElement.offsetParent")]),t._v(' 是一个只读属性，返回一个指向最近的（closest，指包含层级上的最近）包含该元素的定位元素。如果没有定位的元素，则 offsetParent 为最近的 table, table cell 或根元素（标准模式下为 html；quirks 模式下为 body）。当元素的 style.display 设置为 "none" 时，offsetParent 返回 null。offsetParent 很有用，因为 offsetTop 和 offsetLeft 都是相对于其内边距边界的。')]),t._v(" "),a("h3",{attrs:{id:"htmlelement-offsettop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#htmlelement-offsettop","aria-hidden":"true"}},[t._v("#")]),t._v(" HTMLElement.offsetTop")]),t._v(" "),a("p",[a("code",[t._v("HTMLElement.offsetTop")]),t._v(" 为只读属性，它返回当前元素相对于其 offsetParent 元素的顶部的距离。")]),t._v(" "),a("h3",{attrs:{id:"htmlelement-offsetleft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#htmlelement-offsetleft","aria-hidden":"true"}},[t._v("#")]),t._v(" HTMLElement.offsetLeft")]),t._v(" "),a("p",[a("code",[t._v("HTMLElement.offsetLeft")]),t._v(" 是一个只读属性，返回当前元素左上角相对于 HTMLElement.offsetParent 节点的左边界偏移的像素值。")]),t._v(" "),a("p",[t._v("对块级元素来说，offsetTop、offsetLeft、offsetWidth 及 offsetHeight 描述了元素相对于 offsetParent 的边界框。")]),t._v(" "),a("p",[t._v("然而，对于可被截断到下一行的行内元素（如 span），offsetTop 和 offsetLeft 描述的是第一个边界框的位置（使用 Element.getClientRects() 来获取其宽度和高度），而 offsetWidth 和 offsetHeight 描述的是边界框的尺寸（使用 Element.getBoundingClientRect 来获取其位置）。因此，使用 offsetLeft、offsetTop、offsetWidth、offsetHeight 来对应 left、top、width 和 height 的一个盒子将不会是文本容器 span 的盒子边界。")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("solid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Short span. "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("long"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Long span that wraps withing this div."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" solid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("z-index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" box "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"box"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" long "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"long"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// long.offsetLeft这个值就是span的offsetLeft.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// span是个行内元素，它没有absolute定位，但还是默认offsetParent就是父元素，而不是根")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\n  box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" long"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollLeft "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" long"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" long"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" long"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br")])]),a("h2",{attrs:{id:"scroll"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scroll","aria-hidden":"true"}},[t._v("#")]),t._v(" scroll")]),t._v(" "),a("h3",{attrs:{id:"element-scrollwidth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-scrollwidth","aria-hidden":"true"}},[t._v("#")]),t._v(" Element.scrollWidth")]),t._v(" "),a("p",[a("code",[t._v("Element.scrollWidth")]),t._v(" 是只读属性，表示元素内容的宽度，包括由于滚动而未显示在屏幕中内容")]),t._v(" "),a("p",[t._v("scrollWidth 值等于元素在不使用水平滚动条的情况下适合视口中的所有内容所需的最小宽度。 宽度的测量方式与 clientWidth 相同：它包含元素的内边距，但不包括边框，外边距或垂直滚动条（如果存在）。 它还可以包括伪元素的宽度，例如::before 或::after。 如果元素的内容可以适合而不需要水平滚动条，则其 scrollWidth 等于 clientWidth")]),t._v(" "),a("h3",{attrs:{id:"element-scrollheight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-scrollheight","aria-hidden":"true"}},[t._v("#")]),t._v(" Element.scrollHeight")]),t._v(" "),a("p",[a("code",[t._v("Element.scrollHeight")]),t._v(" 这个只读属性是一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容。")]),t._v(" "),a("p",[t._v("scrollHeight 的值等于该元素在不使用滚动条的情况下为了适应视口中所用内容所需的最小高度。 没有垂直滚动条的情况下，scrollHeight 值与元素视图填充所有内容所需要的最小值 clientHeight 相同。包括元素的 padding，但不包括元素的 border 和 margin。scrollHeight 也包括 ::before 和 ::after 这样的伪元素。")]),t._v(" "),a("h3",{attrs:{id:"element-scrolltop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-scrolltop","aria-hidden":"true"}},[t._v("#")]),t._v(" Element.scrollTop")]),t._v(" "),a("p",[a("code",[t._v("Element.scrollTop")]),t._v(" 属性可以获取或设置一个元素的内容垂直滚动的像素数。")]),t._v(" "),a("p",[t._v("一个元素的 scrollTop 值是这个元素的顶部到视口可见内容（的顶部）的距离的度量。当一个元素的内容没有产生垂直方向的滚动条，那么它的 scrollTop 值为 0。")]),t._v(" "),a("h3",{attrs:{id:"element-scrollleft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-scrollleft","aria-hidden":"true"}},[t._v("#")]),t._v(" Element.scrollLeft")]),t._v(" "),a("p",[a("code",[t._v("Element.scrollLeft")]),t._v(" 属性可以读取或设置元素滚动条到元素左边的距离。")]),t._v(" "),a("p",[t._v("注意如果这个元素的内容排列方向（direction） 是 rtl (right-to-left) ，那么滚动条会位于最右侧（内容开始处），并且 scrollLeft 值为 0。此时，当你从右到左拖动滚动条时，scrollLeft 会从 0 变为负数（这个特性在 chrome 浏览器中不存在）。")])])])},[],!1,null,null,null);s.default=n.exports}}]);