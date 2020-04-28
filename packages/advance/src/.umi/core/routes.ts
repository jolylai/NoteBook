import { ApplyPluginsType } from '/Users/laiguolin/Workspace/notebook/notebook/node_modules/@umijs/runtime/dist/index.js';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/_demos/demo1",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/css/animation/demo/Demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-1",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/css/box-model/background/demo/Demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo2",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/css/box-model/border/demo/Demo2.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo3",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/css/box-model/border/demo/Demo3.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/triangle-step",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/css/box-model/border/demo/TriangleStep.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/triangle",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/css/box-model/border/demo/Triangle.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/palette",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/css/guide/demo/Palette.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-2",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/css/layout/flex/demo/Demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/demo1-3",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/css/layout/float/demo/Demo1.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/button",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/html/button/demo/Button.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/button-group",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/html/button/demo/ButtonGroup.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/alt",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/html/image/demo/Alt.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/responsive",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/html/image/demo/Responsive.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/picture",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/html/image/demo/Picture.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/horizontal",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/html/list/demo/Horizontal.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/vertical",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/html/list/demo/Vertical.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/list",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/html/list/demo/List.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/fetch-json",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/tools/demo/FetchJson.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/json-placeholder",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/tools/demo/JsonPlaceholder.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/random-user",
    "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/tools/demo/RandomUser.tsx').default,
    "exact": true
  },
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('/Users/laiguolin/Workspace/notebook/notebook/node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"/css":[{"title":"概览","path":"/css/guide","meta":{"order":1},"children":[{"path":"/css/guide","title":"概览","meta":{}},{"path":"/css/guide/spec","title":"规范","meta":{}}]},{"title":"动画","path":"/css/animation","meta":{},"children":[{"path":"/css/animation","title":"加载中","meta":{}}]},{"title":"盒子模型","path":"/css/box-model","meta":{},"children":[{"path":"/css/box-model/background","title":"背景","meta":{}},{"path":"/css/box-model/border","title":"边框","meta":{}}]},{"title":"结构与布局","path":"/css/layout","meta":{},"children":[{"path":"/css/layout/flex","title":"Flex","meta":{}},{"path":"/css/layout/float","title":"浮动","meta":{}},{"path":"/css/layout/responsive","title":"自适应","meta":{}}]}],"/design-patterns":[{"path":"/design-patterns","title":"指南","meta":{}},{"title":"创建型模式","path":"/design-patterns/creation","meta":{},"children":[{"path":"/design-patterns/creation/factory","title":"工厂模式","meta":{}},{"path":"/design-patterns/creation/singleton","title":"单例模式","meta":{}}]}],"/html":[{"title":"Button","path":"/html/button","meta":{},"children":[]},{"title":"Image","path":"/html/image","meta":{},"children":[]},{"title":"List","path":"/html/list","meta":{},"children":[]}],"/tools":[{"path":"/tools/map","title":"地图","meta":{}},{"path":"/tools/online","title":"在线工具","meta":{}},{"path":"/tools/typescript","title":"TypeScript","meta":{}}],"*":[{"path":"/","title":"全家桶","meta":{}}]}},"locales":[],"navs":{"*":[{"title":"HTML","path":"/html","order":1},{"title":"CSS","path":"/css","order":20},{"title":"设计模式","path":"/design-patterns","order":30},{"path":"/tools","title":"Tools"}]},"title":"橙柚","logo":"https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/desktop.jpg","mode":"site"},
      ...props,
    }),
    "routes": [
      {
        "path": "/css/animation",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/css/animation/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/css/animation/index.md",
          "updatedTime": null,
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
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/css/box-model/background/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/css/box-model/background/index.md",
          "updatedTime": null,
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
            }
          ]
        },
        "title": "背景"
      },
      {
        "path": "/css/box-model/border",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/css/box-model/border/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/css/box-model/border/index.md",
          "updatedTime": null,
          "title": "边框",
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
        "path": "/css/guide",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/css/guide/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/css/guide/index.md",
          "updatedTime": null,
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
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/css/guide/spec.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/css/guide/spec.md",
          "updatedTime": null,
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
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/css/layout/flex/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/css/layout/flex/index.md",
          "updatedTime": null,
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
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/css/layout/float/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/css/layout/float/index.md",
          "updatedTime": null,
          "title": "浮动",
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
        "title": "浮动"
      },
      {
        "path": "/css/layout/responsive",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/css/layout/responsive/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/css/layout/responsive/index.md",
          "updatedTime": null,
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
        "path": "/design-patterns",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/design-patterns/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/design-patterns/index.md",
          "updatedTime": null,
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
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/design-patterns/creation/factory.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/design-patterns/creation/factory.md",
          "updatedTime": null,
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
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/design-patterns/creation/singleton.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/design-patterns/creation/singleton.md",
          "updatedTime": null,
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
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/html/button/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/html/button/index.md",
          "updatedTime": null,
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
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/html/image/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/html/image/index.md",
          "updatedTime": null,
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
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/html/list/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/html/list/index.md",
          "updatedTime": null,
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
        "path": "/tools/map",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/tools/map.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/tools/map.md",
          "updatedTime": null,
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
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/tools/online.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/tools/online.md",
          "updatedTime": null,
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
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/src/tools/typescript.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/tools/typescript.md",
          "updatedTime": null,
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
        "path": "/",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/packages/advance/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": null,
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
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "React",
              "desc": "<div class=\"markdown\"><p>React 使用</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "Feature 2",
              "desc": "<div class=\"markdown\"><p>Balabala</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "Feature 3",
              "desc": "<div class=\"markdown\"><p>Balabala</p></div>"
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
              "value": "Issues",
              "heading": "issues"
            },
            {
              "depth": 2,
              "value": "技术栈",
              "heading": "技术栈"
            }
          ],
          "title": "全家桶"
        },
        "title": "全家桶"
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
        "redirect": "/css/layout/flex"
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
