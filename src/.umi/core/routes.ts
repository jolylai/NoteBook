import { ApplyPluginsType } from '/Users/laiguolin/Workspace/notebook/notebook/node_modules/@umijs/runtime/dist/index.js';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/_demos/demo1",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/animation/demo/Demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-1",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/box-model/background/demo/Demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/position",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/box-model/background/demo/Position.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo2",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/box-model/border/demo/Demo2.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo3",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/box-model/border/demo/Demo3.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/triangle-step",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/box-model/border/demo/TriangleStep.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/triangle",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/box-model/border/demo/Triangle.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/palette",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/guide/demo/Palette.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-2",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/layout/flex/demo/Demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-3",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/layout/float/demo/Demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo5",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/layout/float/demo/Demo5.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo6",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/layout/float/demo/Demo6.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo2-1",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/layout/float/demo/Demo2.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo3-1",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/layout/float/demo/Demo3.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo4",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/layout/float/demo/Demo4.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-4",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/user-experience/scrolling/demo/Demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/button",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/html/button/demo/Button.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/button-group",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/html/button/demo/ButtonGroup.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/alt",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/html/image/demo/Alt.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/responsive",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/html/image/demo/Responsive.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/picture",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/html/image/demo/Picture.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/horizontal",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/html/list/demo/Horizontal.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/vertical",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/html/list/demo/Vertical.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/list",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/html/list/demo/List.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/layout",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/html/semanteme/demo/Layout.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/fetch-json",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/tools/demo/FetchJson.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/json-placeholder",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/tools/demo/JsonPlaceholder.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/random-user",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/tools/demo/RandomUser.tsx').default,
    "exact": true
  },
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('/Users/laiguolin/Workspace/notebook/notebook/node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"全家桶","meta":{}}],"/css":[{"title":"概览","path":"/css/guide","meta":{"order":1},"children":[{"path":"/css/guide","title":"概览","meta":{}},{"path":"/css/guide/spec","title":"规范","meta":{}}]},{"title":"盒子模型","path":"/css/box-model","meta":{"order":10},"children":[{"path":"/css/box-model/background","title":"背景","meta":{}},{"path":"/css/box-model/border","title":"边框","meta":{}},{"path":"/css/box-model/content","title":"Content","meta":{}}]},{"title":"结构与布局","path":"/css/layout","meta":{"order":20},"children":[{"path":"/css/layout/float","title":"浮动","meta":{"order":1}},{"path":"/css/layout/flex","title":"Flex","meta":{}},{"path":"/css/layout/responsive","title":"自适应","meta":{}}]},{"title":"动画","path":"/css/animation","meta":{},"children":[{"path":"/css/animation","title":"加载中","meta":{}}]},{"title":"用户体验","path":"/css/user-experience","meta":{},"children":[{"path":"/css/user-experience/scrolling","title":"滚动","meta":{}}]}],"/design-patterns":[{"path":"/design-patterns","title":"指南","meta":{}},{"title":"创建型模式","path":"/design-patterns/creation","meta":{},"children":[{"path":"/design-patterns/creation/factory","title":"工厂模式","meta":{}},{"path":"/design-patterns/creation/singleton","title":"单例模式","meta":{}}]}],"/html":[{"title":"Button","path":"/html/button","meta":{},"children":[]},{"title":"Image","path":"/html/image","meta":{},"children":[]},{"title":"List","path":"/html/list","meta":{},"children":[]},{"title":"Semanteme","path":"/html/semanteme","meta":{},"children":[{"path":"/html/semanteme","title":"semanteme","meta":{}}]}],"/js":[{"title":"指南","path":"/js/guide","meta":{"order":1},"children":[{"path":"/js/guide","title":"Guide","meta":{}},{"path":"/js/guide/array","title":"Array","meta":{}},{"path":"/js/guide/call-apply-bind","title":"闭包","meta":{}},{"path":"/js/guide/clean-code","title":"代码整洁","meta":{}},{"path":"/js/guide/coercion","title":"强制类型转换","meta":{}},{"path":"/js/guide/date","title":"Date","meta":{}},{"path":"/js/guide/debounce","title":"防抖","meta":{}},{"path":"/js/guide/microtasks","title":"microtasks","meta":{}},{"path":"/js/guide/module","title":"模块化","meta":{}},{"path":"/js/guide/string","title":"String","meta":{}},{"path":"/js/guide/throttle","title":"节流","meta":{}},{"path":"/js/guide/types","title":"类型","meta":{}},{"path":"/js/guide/utils","title":"工具函数","meta":{}}]},{"title":"异步","path":"/jsasync","meta":{},"children":[{"path":"/jsasync/promise","title":"Promise","meta":{}}]}],"/tools":[{"path":"/tools/map","title":"地图","meta":{}},{"path":"/tools/online","title":"在线工具","meta":{}},{"path":"/tools/typescript","title":"TypeScript","meta":{}}]}},"locales":[],"navs":{"*":[{"title":"HTML","path":"/html","order":1},{"title":"CSS","path":"/css","order":20},{"title":"设计模式","path":"/design-patterns","order":30},{"path":"/js","title":"Js"},{"path":"/tools","title":"Tools"}]},"title":"橙柚","logo":"https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/desktop.jpg","mode":"site"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1589956505000,
          "hero": {
            "title": "重学前端",
            "desc": "<div class=\"markdown\"><p>前端粉刷匠</p></div>",
            "actions": [
              {
                "text": "Getting Started",
                "link": "/components"
              }
            ]
          },
          "features": [
            {
              "icon": "https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/html.svg",
              "title": "HTML"
            },
            {
              "icon": "https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/css.svg",
              "title": "CSS"
            },
            {
              "icon": "https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/javascript.svg",
              "title": "JavaScript"
            }
          ],
          "slugs": [
            {
              "depth": 2,
              "value": "全家桶",
              "heading": "全家桶"
            },
            {
              "depth": 2,
              "value": "学习方法",
              "heading": "学习方法"
            },
            {
              "depth": 2,
              "value": "路线图",
              "heading": "路线图"
            }
          ],
          "title": "全家桶"
        },
        "title": "全家桶"
      },
      {
        "path": "/css/animation",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/animation/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/css/animation/index.md",
          "updatedTime": 1589956505000,
          "title": "加载中",
          "nav": {
            "title": "CSS",
            "path": "/css"
          },
          "group": {
            "title": "动画",
            "path": "/css/animation"
          },
          "slugs": []
        },
        "title": "加载中"
      },
      {
        "path": "/css/box-model/background",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/box-model/background/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/css/box-model/background/index.md",
          "updatedTime": 1589956505000,
          "title": "背景",
          "nav": {
            "title": "CSS",
            "path": "/css"
          },
          "group": {
            "title": "盒子模型",
            "path": "/css/box-model"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "背景与边框",
              "heading": "背景与边框"
            },
            {
              "depth": 3,
              "value": "background-position",
              "heading": "background-position"
            }
          ]
        },
        "title": "背景"
      },
      {
        "path": "/css/box-model/border",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/box-model/border/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/css/box-model/border/index.md",
          "updatedTime": 1589956505000,
          "title": "边框",
          "nav": {
            "title": "CSS",
            "path": "/css"
          },
          "group": {
            "title": "盒子模型",
            "path": "/css/box-model",
            "order": 30
          },
          "slugs": [
            {
              "depth": 2,
              "value": "半透明边框",
              "heading": "半透明边框"
            },
            {
              "depth": 2,
              "value": "多重边框",
              "heading": "多重边框"
            },
            {
              "depth": 3,
              "value": "box-shadow",
              "heading": "box-shadow"
            },
            {
              "depth": 3,
              "value": "倒三角",
              "heading": "倒三角"
            }
          ]
        },
        "title": "边框"
      },
      {
        "path": "/css/box-model/content",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/box-model/content/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/css/box-model/content/index.md",
          "updatedTime": 1589956505000,
          "title": "Content",
          "nav": {
            "title": "CSS",
            "path": "/css"
          },
          "group": {
            "title": "盒子模型",
            "path": "/css/box-model",
            "order": 10
          },
          "slugs": [
            {
              "depth": 2,
              "value": "替换元素",
              "heading": "替换元素"
            }
          ]
        },
        "title": "Content"
      },
      {
        "path": "/css/guide",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/guide/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/css/guide/index.md",
          "updatedTime": 1589956505000,
          "title": "概览",
          "nav": {
            "title": "CSS",
            "path": "/css"
          },
          "group": {
            "title": "概览",
            "path": "/css/guide",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "调色板",
              "heading": "调色板"
            },
            {
              "depth": 2,
              "value": "网站",
              "heading": "网站"
            },
            {
              "depth": 2,
              "value": "配色",
              "heading": "配色"
            },
            {
              "depth": 2,
              "value": "格式化语法",
              "heading": "格式化语法"
            }
          ]
        },
        "title": "概览"
      },
      {
        "path": "/css/guide/spec",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/guide/spec.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/css/guide/spec.md",
          "updatedTime": 1589956505000,
          "title": "规范",
          "nav": {
            "title": "CSS",
            "path": "/css",
            "order": 20
          },
          "group": {
            "title": "概览",
            "path": "/css/guide",
            "order": 1
          },
          "slugs": [
            {
              "depth": 1,
              "value": "设计规范",
              "heading": "设计规范"
            },
            {
              "depth": 2,
              "value": "配色",
              "heading": "配色"
            },
            {
              "depth": 3,
              "value": "茶白",
              "heading": "茶白"
            },
            {
              "depth": 2,
              "value": "字体家族",
              "heading": "字体家族"
            },
            {
              "depth": 2,
              "value": "单位",
              "heading": "单位"
            }
          ]
        },
        "title": "规范"
      },
      {
        "path": "/css/layout/flex",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/layout/flex/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/css/layout/flex/index.md",
          "updatedTime": 1589956505000,
          "title": "Flex",
          "nav": {
            "title": "CSS",
            "path": "/css"
          },
          "group": {
            "title": "结构与布局",
            "path": "/css/layout"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "简写",
              "heading": "简写"
            }
          ]
        },
        "title": "Flex"
      },
      {
        "path": "/css/layout/float",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/layout/float/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/css/layout/float/index.md",
          "updatedTime": 1589956505000,
          "title": "浮动",
          "order": 1,
          "nav": {
            "title": "CSS",
            "path": "/css"
          },
          "group": {
            "title": "结构与布局",
            "path": "/css/layout",
            "order": 20
          },
          "slugs": [
            {
              "depth": 2,
              "value": "特性",
              "heading": "特性"
            },
            {
              "depth": 3,
              "value": "包裹性",
              "heading": "包裹性"
            },
            {
              "depth": 3,
              "value": "块状化",
              "heading": "块状化"
            },
            {
              "depth": 3,
              "value": "破坏文档流",
              "heading": "破坏文档流"
            },
            {
              "depth": 2,
              "value": "流体布局",
              "heading": "流体布局"
            },
            {
              "depth": 3,
              "value": "对齐",
              "heading": "对齐"
            },
            {
              "depth": 3,
              "value": "作用机制",
              "heading": "作用机制"
            },
            {
              "depth": 3,
              "value": "两栏自适应布局",
              "heading": "两栏自适应布局"
            },
            {
              "depth": 3,
              "value": "多栏布局",
              "heading": "多栏布局"
            },
            {
              "depth": 2,
              "value": "清除浮动",
              "heading": "清除浮动"
            }
          ]
        },
        "title": "浮动"
      },
      {
        "path": "/css/layout/responsive",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/layout/responsive/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/css/layout/responsive/index.md",
          "updatedTime": 1589956505000,
          "title": "自适应",
          "nav": {
            "title": "CSS",
            "path": "/css"
          },
          "group": {
            "title": "结构与布局",
            "path": "/css/layout"
          },
          "slugs": []
        },
        "title": "自适应"
      },
      {
        "path": "/css/user-experience/scrolling",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/css/user-experience/scrolling/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/css/user-experience/scrolling/index.md",
          "updatedTime": 1589956505000,
          "title": "滚动",
          "nav": {
            "title": "CSS",
            "path": "/css"
          },
          "group": {
            "title": "用户体验",
            "path": "/css/user-experience"
          },
          "slugs": []
        },
        "title": "滚动"
      },
      {
        "path": "/design-patterns",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/design-patterns/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/design-patterns/index.md",
          "updatedTime": 1589956505000,
          "title": "指南",
          "nav": {
            "title": "设计模式",
            "path": "/design-patterns",
            "order": 30
          },
          "slugs": [
            {
              "depth": 2,
              "value": "设计原则(SOLID)",
              "heading": "设计原则solid"
            },
            {
              "depth": 2,
              "value": "准则",
              "heading": "准则"
            },
            {
              "depth": 2,
              "value": "参考",
              "heading": "参考"
            }
          ]
        },
        "title": "指南"
      },
      {
        "path": "/design-patterns/creation/factory",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/design-patterns/creation/factory.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/design-patterns/creation/factory.md",
          "updatedTime": 1589956505000,
          "title": "工厂模式",
          "nav": {
            "title": "设计模式",
            "path": "/design-patterns"
          },
          "group": {
            "title": "创建型模式",
            "path": "/design-patterns/creation"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "问题",
              "heading": "问题"
            },
            {
              "depth": 2,
              "value": "介绍",
              "heading": "介绍"
            },
            {
              "depth": 2,
              "value": "使用场景",
              "heading": "使用场景"
            },
            {
              "depth": 3,
              "value": "Axios",
              "heading": "axios"
            },
            {
              "depth": 3,
              "value": "JQuery",
              "heading": "jquery"
            },
            {
              "depth": 2,
              "value": "优缺点",
              "heading": "优缺点"
            }
          ]
        },
        "title": "工厂模式"
      },
      {
        "path": "/design-patterns/creation/singleton",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/design-patterns/creation/singleton.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/design-patterns/creation/singleton.md",
          "updatedTime": 1589956505000,
          "title": "单例模式",
          "nav": {
            "title": "设计模式",
            "path": "/design-patterns"
          },
          "group": {
            "title": "创建型模式",
            "path": "/design-patterns/creation"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "问题",
              "heading": "问题"
            },
            {
              "depth": 2,
              "value": "介绍",
              "heading": "介绍"
            },
            {
              "depth": 2,
              "value": "使用场景",
              "heading": "使用场景"
            },
            {
              "depth": 2,
              "value": "优缺点",
              "heading": "优缺点"
            }
          ]
        },
        "title": "单例模式"
      },
      {
        "path": "/html/button",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/html/button/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/html/button/index.md",
          "updatedTime": 1589956505000,
          "title": "Button",
          "nav": {
            "title": "HTML",
            "path": "/html",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Button",
              "heading": "button"
            },
            {
              "depth": 3,
              "value": "禁用",
              "heading": "禁用"
            },
            {
              "depth": 3,
              "value": "图标",
              "heading": "图标"
            },
            {
              "depth": 3,
              "value": "伪类",
              "heading": "伪类"
            },
            {
              "depth": 2,
              "value": "ButtonGroup",
              "heading": "buttongroup"
            },
            {
              "depth": 3,
              "value": "圆角",
              "heading": "圆角"
            },
            {
              "depth": 3,
              "value": "边框合并",
              "heading": "边框合并"
            }
          ],
          "group": {
            "path": "/html/button",
            "title": "Button"
          }
        },
        "title": "Button"
      },
      {
        "path": "/html/image",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/html/image/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/html/image/index.md",
          "updatedTime": 1589956505000,
          "title": "Image",
          "nav": {
            "title": "HTML",
            "path": "/html",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "可访问性",
              "heading": "可访问性"
            },
            {
              "depth": 2,
              "value": "响应式",
              "heading": "响应式"
            }
          ],
          "group": {
            "path": "/html/image",
            "title": "Image"
          }
        },
        "title": "Image"
      },
      {
        "path": "/html/list",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/html/list/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/html/list/index.md",
          "updatedTime": 1589956505000,
          "title": "List",
          "nav": {
            "title": "HTML",
            "path": "/html",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "水平",
              "heading": "水平"
            },
            {
              "depth": 3,
              "value": "圆角",
              "heading": "圆角"
            },
            {
              "depth": 2,
              "value": "垂直",
              "heading": "垂直"
            },
            {
              "depth": 3,
              "value": "合并边框",
              "heading": "合并边框"
            },
            {
              "depth": 2,
              "value": "自定义",
              "heading": "自定义"
            }
          ],
          "group": {
            "path": "/html/list",
            "title": "List"
          }
        },
        "title": "List"
      },
      {
        "path": "/html/semanteme",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/html/semanteme/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/html/semanteme/index.md",
          "updatedTime": 1589956505000,
          "title": "semanteme",
          "nav": {
            "title": "HTML",
            "path": "/html",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "布局",
              "heading": "布局"
            }
          ],
          "group": {
            "path": "/html/semanteme",
            "title": "Semanteme"
          }
        },
        "title": "semanteme"
      },
      {
        "path": "/jsasync/promise",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/js/async/promise.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/js/async/promise.md",
          "updatedTime": 1589956505000,
          "title": "Promise",
          "group": {
            "title": "异步",
            "path": "/jsasync"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "思考",
              "heading": "思考"
            },
            {
              "depth": 3,
              "value": "Promise 构造函数是同步执行还是异步执行，那么 then 方法呢？",
              "heading": "promise-构造函数是同步执行还是异步执行，那么-then-方法呢？"
            },
            {
              "depth": 2,
              "value": "链式调用",
              "heading": "链式调用"
            },
            {
              "depth": 2,
              "value": "then 中的返回值",
              "heading": "then-中的返回值"
            }
          ],
          "nav": {
            "path": "/js",
            "title": "Js"
          }
        },
        "title": "Promise"
      },
      {
        "path": "/js/guide/array",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/js/guide/array.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/js/guide/array.md",
          "updatedTime": 1589956505000,
          "title": "Array",
          "group": {
            "title": "指南",
            "path": "/js/guide"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "ArrayConcat",
              "heading": "arrayconcat"
            },
            {
              "depth": 2,
              "value": "include",
              "heading": "include"
            },
            {
              "depth": 2,
              "value": "intersection",
              "heading": "intersection"
            },
            {
              "depth": 2,
              "value": "remove",
              "heading": "remove"
            },
            {
              "depth": 2,
              "value": "sample",
              "heading": "sample"
            },
            {
              "depth": 2,
              "value": "union",
              "heading": "union"
            },
            {
              "depth": 2,
              "value": "without",
              "heading": "without"
            },
            {
              "depth": 2,
              "value": "zip",
              "heading": "zip"
            },
            {
              "depth": 2,
              "value": "average",
              "heading": "average"
            },
            {
              "depth": 2,
              "value": "occurrences",
              "heading": "occurrences"
            },
            {
              "depth": 2,
              "value": "deepFlatten",
              "heading": "deepflatten"
            },
            {
              "depth": 2,
              "value": "dropElements",
              "heading": "dropelements"
            },
            {
              "depth": 2,
              "value": "fillArray",
              "heading": "fillarray"
            },
            {
              "depth": 2,
              "value": "filterNonUnique",
              "heading": "filternonunique"
            },
            {
              "depth": 2,
              "value": "filterNonUniqueBy 💯",
              "heading": "filternonuniqueby-"
            },
            {
              "depth": 2,
              "value": "take",
              "heading": "take"
            },
            {
              "depth": 2,
              "value": "unique",
              "heading": "unique"
            },
            {
              "depth": 2,
              "value": "all",
              "heading": "all"
            },
            {
              "depth": 2,
              "value": "bifurcate",
              "heading": "bifurcate"
            },
            {
              "depth": 2,
              "value": "countBy",
              "heading": "countby"
            },
            {
              "depth": 2,
              "value": "初始化数组",
              "heading": "初始化数组"
            },
            {
              "depth": 3,
              "value": "initializeArrayWithRange",
              "heading": "initializearraywithrange"
            },
            {
              "depth": 3,
              "value": "initializeArrayWithRangeRight",
              "heading": "initializearraywithrangeright"
            },
            {
              "depth": 3,
              "value": "initializeArrayWithValues",
              "heading": "initializearraywithvalues"
            }
          ],
          "nav": {
            "path": "/js",
            "title": "Js"
          }
        },
        "title": "Array"
      },
      {
        "path": "/js/guide/call-apply-bind",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/js/guide/call-apply-bind.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/js/guide/call-apply-bind.md",
          "updatedTime": 1589956505000,
          "title": "闭包",
          "group": {
            "title": "指南",
            "path": "/js/guide"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "js 中的 call、apply、bind",
              "heading": "js-中的-call、apply、bind"
            },
            {
              "depth": 2,
              "value": "文章",
              "heading": "文章"
            }
          ],
          "nav": {
            "path": "/js",
            "title": "Js"
          }
        },
        "title": "闭包"
      },
      {
        "path": "/js/guide/clean-code",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/js/guide/clean-code.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/js/guide/clean-code.md",
          "updatedTime": 1589956505000,
          "title": "代码整洁",
          "group": {
            "title": "指南",
            "order": 1,
            "path": "/js/guide"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "JavaScript 代码整洁",
              "heading": "javascript-代码整洁"
            }
          ],
          "nav": {
            "path": "/js",
            "title": "Js"
          }
        },
        "title": "代码整洁"
      },
      {
        "path": "/js/guide/coercion",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/js/guide/coercion.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/js/guide/coercion.md",
          "updatedTime": 1589956505000,
          "title": "强制类型转换",
          "group": {
            "title": "指南",
            "path": "/js/guide"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "toString",
              "heading": "tostring"
            },
            {
              "depth": 2,
              "value": "ToNumber",
              "heading": "tonumber"
            },
            {
              "depth": 3,
              "value": "基本类型值转 Number",
              "heading": "基本类型值转-number"
            },
            {
              "depth": 3,
              "value": "对象类型值",
              "heading": "对象类型值"
            },
            {
              "depth": 2,
              "value": "ToBoolean",
              "heading": "toboolean"
            },
            {
              "depth": 3,
              "value": "假值",
              "heading": "假值"
            }
          ],
          "nav": {
            "path": "/js",
            "title": "Js"
          }
        },
        "title": "强制类型转换"
      },
      {
        "path": "/js/guide/date",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/js/guide/date.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/js/guide/date.md",
          "updatedTime": 1589956505000,
          "title": "Date",
          "group": {
            "title": "指南",
            "path": "/js/guide"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "dayOfYear",
              "heading": "dayofyear"
            },
            {
              "depth": 2,
              "value": "formatDuration",
              "heading": "formatduration"
            },
            {
              "depth": 2,
              "value": "getColonTimeFromDate",
              "heading": "getcolontimefromdate"
            },
            {
              "depth": 2,
              "value": "getDaysDiffBetweenDates",
              "heading": "getdaysdiffbetweendates"
            },
            {
              "depth": 2,
              "value": "getMeridiemSuffixOfInteger",
              "heading": "getmeridiemsuffixofinteger"
            },
            {
              "depth": 2,
              "value": "isAfterDate",
              "heading": "isafterdate"
            },
            {
              "depth": 2,
              "value": "isBeforeDate",
              "heading": "isbeforedate"
            },
            {
              "depth": 2,
              "value": "isSameDate",
              "heading": "issamedate"
            },
            {
              "depth": 2,
              "value": "maxDate",
              "heading": "maxdate"
            },
            {
              "depth": 2,
              "value": "tomorrow",
              "heading": "tomorrow"
            }
          ],
          "nav": {
            "path": "/js",
            "title": "Js"
          }
        },
        "title": "Date"
      },
      {
        "path": "/js/guide/debounce",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/js/guide/debounce.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/js/guide/debounce.md",
          "updatedTime": 1589956505000,
          "title": "防抖",
          "group": {
            "title": "指南",
            "path": "/js/guide"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "简易实现",
              "heading": "简易实现"
            },
            {
              "depth": 2,
              "value": "带有立即执行选项的防抖函数",
              "heading": "带有立即执行选项的防抖函数"
            },
            {
              "depth": 2,
              "value": "参考",
              "heading": "参考"
            }
          ],
          "nav": {
            "path": "/js",
            "title": "Js"
          }
        },
        "title": "防抖"
      },
      {
        "path": "/js/guide",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/js/guide/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/js/guide/index.md",
          "updatedTime": 1589956505000,
          "slugs": [
            {
              "depth": 1,
              "value": "Guide",
              "heading": "guide"
            },
            {
              "depth": 2,
              "value": "基础",
              "heading": "基础"
            },
            {
              "depth": 2,
              "value": "Github",
              "heading": "github"
            },
            {
              "depth": 2,
              "value": "Blog",
              "heading": "blog"
            },
            {
              "depth": 2,
              "value": "异步",
              "heading": "异步"
            },
            {
              "depth": 2,
              "value": "未整理",
              "heading": "未整理"
            }
          ],
          "title": "Guide",
          "nav": {
            "path": "/js",
            "title": "Js"
          },
          "group": {
            "path": "/js/guide",
            "title": "指南"
          }
        },
        "title": "Guide"
      },
      {
        "path": "/js/guide/microtasks",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/js/guide/microtasks.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/js/guide/microtasks.md",
          "updatedTime": 1589956505000,
          "title": "microtasks",
          "group": {
            "title": "指南",
            "path": "/js/guide"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "microtasks",
              "heading": "microtasks"
            },
            {
              "depth": 2,
              "value": "事件循环",
              "heading": "事件循环"
            },
            {
              "depth": 2,
              "value": "Microtasks、Macrotasks（task）",
              "heading": "microtasks、macrotasks（task）"
            },
            {
              "depth": 2,
              "value": "异步运行机制",
              "heading": "异步运行机制"
            },
            {
              "depth": 2,
              "value": "async await、Promise、setTimeout",
              "heading": "async-await、promise、settimeout"
            },
            {
              "depth": 3,
              "value": "setTimeout",
              "heading": "settimeout"
            },
            {
              "depth": 3,
              "value": "Promise",
              "heading": "promise"
            },
            {
              "depth": 3,
              "value": "async await",
              "heading": "async-await"
            },
            {
              "depth": 2,
              "value": "例子",
              "heading": "例子"
            }
          ],
          "nav": {
            "path": "/js",
            "title": "Js"
          }
        },
        "title": "microtasks"
      },
      {
        "path": "/js/guide/module",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/js/guide/module.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/js/guide/module.md",
          "updatedTime": 1589956505000,
          "slugs": [
            {
              "depth": 1,
              "value": "模块化",
              "heading": "模块化"
            }
          ],
          "title": "模块化",
          "nav": {
            "path": "/js",
            "title": "Js"
          },
          "group": {
            "path": "/js/guide",
            "title": "指南"
          }
        },
        "title": "模块化"
      },
      {
        "path": "/js/guide/string",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/js/guide/string.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/js/guide/string.md",
          "updatedTime": 1589956505000,
          "title": "String",
          "group": {
            "title": "指南",
            "path": "/js/guide"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "byteSize",
              "heading": "bytesize"
            },
            {
              "depth": 2,
              "value": "capitalize",
              "heading": "capitalize"
            }
          ],
          "nav": {
            "path": "/js",
            "title": "Js"
          }
        },
        "title": "String"
      },
      {
        "path": "/js/guide/throttle",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/js/guide/throttle.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/js/guide/throttle.md",
          "updatedTime": 1589956505000,
          "title": "节流",
          "group": {
            "title": "指南",
            "path": "/js/guide"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "简易实现",
              "heading": "简易实现"
            }
          ],
          "nav": {
            "path": "/js",
            "title": "Js"
          }
        },
        "title": "节流"
      },
      {
        "path": "/js/guide/types",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/js/guide/types.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/js/guide/types.md",
          "updatedTime": 1589956505000,
          "title": "类型",
          "group": {
            "title": "指南",
            "path": "/js/guide"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "内置类型",
              "heading": "内置类型"
            },
            {
              "depth": 2,
              "value": "类型检查",
              "heading": "类型检查"
            },
            {
              "depth": 3,
              "value": "typeof",
              "heading": "typeof"
            },
            {
              "depth": 3,
              "value": "instanceOf",
              "heading": "instanceof"
            },
            {
              "depth": 3,
              "value": "Object.prototype.toString.call()",
              "heading": "objectprototypetostringcall"
            },
            {
              "depth": 3,
              "value": "Array.isArray()",
              "heading": "arrayisarray"
            }
          ],
          "nav": {
            "path": "/js",
            "title": "Js"
          }
        },
        "title": "类型"
      },
      {
        "path": "/js/guide/utils",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/js/guide/utils.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/js/guide/utils.md",
          "updatedTime": 1589956505000,
          "title": "工具函数",
          "group": {
            "title": "指南",
            "path": "/js/guide"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "fixedZero",
              "heading": "fixedzero"
            },
            {
              "depth": 2,
              "value": "isUrl",
              "heading": "isurl"
            },
            {
              "depth": 2,
              "value": "log",
              "heading": "log"
            },
            {
              "depth": 2,
              "value": "digitUppercase",
              "heading": "digituppercase"
            },
            {
              "depth": 2,
              "value": "getRandomColor",
              "heading": "getrandomcolor"
            },
            {
              "depth": 2,
              "value": "isPromise",
              "heading": "ispromise"
            }
          ],
          "nav": {
            "path": "/js",
            "title": "Js"
          }
        },
        "title": "工具函数"
      },
      {
        "path": "/tools/map",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/tools/map.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/tools/map.md",
          "updatedTime": 1589956505000,
          "slugs": [
            {
              "depth": 1,
              "value": "地图",
              "heading": "地图"
            },
            {
              "depth": 2,
              "value": "引入",
              "heading": "引入"
            },
            {
              "depth": 2,
              "value": "使用",
              "heading": "使用"
            }
          ],
          "title": "地图",
          "nav": {
            "path": "/tools",
            "title": "Tools"
          }
        },
        "title": "地图"
      },
      {
        "path": "/tools/online",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/tools/online.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/tools/online.md",
          "updatedTime": 1589956505000,
          "title": "在线工具",
          "slugs": [
            {
              "depth": 2,
              "value": "Mock",
              "heading": "mock"
            },
            {
              "depth": 3,
              "value": "Mocky",
              "heading": "mocky"
            },
            {
              "depth": 3,
              "value": "JsonPlaceholder",
              "heading": "jsonplaceholder"
            },
            {
              "depth": 3,
              "value": "RandomUser",
              "heading": "randomuser"
            },
            {
              "depth": 2,
              "value": "包",
              "heading": "包"
            },
            {
              "depth": 2,
              "value": "视频下载",
              "heading": "视频下载"
            },
            {
              "depth": 2,
              "value": "MongoDB",
              "heading": "mongodb"
            }
          ],
          "nav": {
            "path": "/tools",
            "title": "Tools"
          }
        },
        "title": "在线工具"
      },
      {
        "path": "/tools/typescript",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/docs/tools/typescript.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/tools/typescript.md",
          "updatedTime": 1589956505000,
          "slugs": [
            {
              "depth": 1,
              "value": "TypeScript",
              "heading": "typescript"
            },
            {
              "depth": 2,
              "value": "类型",
              "heading": "类型"
            },
            {
              "depth": 2,
              "value": "枚举",
              "heading": "枚举"
            },
            {
              "depth": 2,
              "value": "React",
              "heading": "react"
            }
          ],
          "title": "TypeScript",
          "nav": {
            "path": "/tools",
            "title": "Tools"
          }
        },
        "title": "TypeScript"
      },
      {
        "path": "/css",
        "meta": {},
        "exact": true,
        "redirect": "/css/guide"
      },
      {
        "path": "/css/box-model",
        "meta": {},
        "exact": true,
        "redirect": "/css/box-model/background"
      },
      {
        "path": "/css/layout",
        "meta": {},
        "exact": true,
        "redirect": "/css/layout/float"
      },
      {
        "path": "/css/user-experience",
        "meta": {},
        "exact": true,
        "redirect": "/css/user-experience/scrolling"
      },
      {
        "path": "/design-patterns/creation",
        "meta": {},
        "exact": true,
        "redirect": "/design-patterns/creation/factory"
      },
      {
        "path": "/html",
        "meta": {
          "order": 1
        },
        "exact": true,
        "redirect": "/html/button"
      },
      {
        "path": "/jsasync",
        "meta": {},
        "exact": true,
        "redirect": "/jsasync/promise"
      },
      {
        "path": "/js",
        "meta": {},
        "exact": true,
        "redirect": "/js/guide"
      },
      {
        "path": "/tools",
        "meta": {},
        "exact": true,
        "redirect": "/tools/map"
      }
    ],
    "title": "橙柚"
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
