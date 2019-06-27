(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{346:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types","aria-hidden":"true"}},[s._v("#")]),s._v(" Types")]),s._v(" "),a("p",[s._v('Some people say JS shouldn\'t claim to have "types," and they should instead be called "tags" or perhaps "subtypes".')]),s._v(" "),a("h2",{attrs:{id:"built-in-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#built-in-types","aria-hidden":"true"}},[s._v("#")]),s._v(" Built-in Types")]),s._v(" "),a("ul",[a("li",[s._v("null")]),s._v(" "),a("li",[s._v("undefined")]),s._v(" "),a("li",[s._v("boolean")]),s._v(" "),a("li",[s._v("number")]),s._v(" "),a("li",[s._v("string")]),s._v(" "),a("li",[s._v("object")]),s._v(" "),a("li",[s._v("symbol -- added in ES6!")])]),s._v(" "),a("p",[a("strong",[s._v("Note")]),s._v(': All of these types except object are called "primitives"(基本类型).')]),s._v(" "),a("h2",{attrs:{id:"typeof-operator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typeof-operator","aria-hidden":"true"}},[s._v("#")]),s._v(" typeof operator")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" undefined "),a("span",{attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"undefined"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"boolean"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("42")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"number"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"42"')]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"string"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" life"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("42")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"object"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("// added in ES6!")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("Symbol")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"symbol"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("// It's special -- special in the sense")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// it's buggy when combined with the typeof operator:")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"object"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("func")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" func "),a("span",{attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"function"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("test for a null value using its type")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" a "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("null")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// (!a -> true)  a maybe false or null")]),s._v("\n\n"),a("span",{attrs:{class:"token operator"}},[s._v("!")]),s._v("a "),a("span",{attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" a "),a("span",{attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"object"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"undefined-vs-undeclared"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#undefined-vs-undeclared","aria-hidden":"true"}},[s._v("#")]),s._v(' undefined vs "undeclared"')]),s._v(" "),a("p",[s._v('Many developers will assume "undefined" and "undeclared" are roughly the same thing, but in JavaScript, they\'re quite different. undefined is a value that a declared variable can hold. "Undeclared" means a variable has never been declared.')]),s._v(" "),a("p",[s._v('JavaScript unfortunately kind of conflates these two terms, not only in its error messages ("ReferenceError: a is not defined") but also in the return values of typeof, which is "undefined" for both cases.')]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" a"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\na"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// undefined")]),s._v("\nb"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// ReferenceError: b is not defined")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" a"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v('// "undefined"')]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" b"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v('// "undefined"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("Check for the global DEBUG variable.The safety guard on typeof is our friend in this case.")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("// oops, this would throw an error!")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token constant"}},[s._v("DEBUG")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v('"Debugging is starting"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("// this is a safe existence check")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{attrs:{class:"token constant"}},[s._v("DEBUG")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"undefined"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v('"Debugging is starting"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])}],!1,null,null,null);t.default=e.exports}}]);