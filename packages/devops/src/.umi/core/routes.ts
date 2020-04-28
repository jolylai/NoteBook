import { ApplyPluginsType } from '/Users/laiguolin/Workspace/notebook/react/node_modules/@umijs/runtime/dist/index.js';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/_demos/index",
    "component": require('/Users/laiguolin/Workspace/notebook/react/packages/hooks/useCallback/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/basic",
    "component": require('/Users/laiguolin/Workspace/notebook/react/packages/hooks/useRef/demo/Basic.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/timer",
    "component": require('/Users/laiguolin/Workspace/notebook/react/packages/hooks/useRef/demo/Timer.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/measure-dom",
    "component": require('/Users/laiguolin/Workspace/notebook/react/packages/hooks/useRef/demo/MeasureDom.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/test-axios",
    "component": require('/Users/laiguolin/Workspace/notebook/react/packages/jest/axios/demo/TestAxios.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/test-form",
    "component": require('/Users/laiguolin/Workspace/notebook/react/packages/jest/dom/demo/TestForm.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/test-fetch",
    "component": require('/Users/laiguolin/Workspace/notebook/react/packages/jest/fetch/demo/TestFetch.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/set-timeout",
    "component": require('/Users/laiguolin/Workspace/notebook/react/packages/jest/timer/demo/SetTimeout.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/basic-1",
    "component": require('/Users/laiguolin/Workspace/notebook/react/packages/pomelo/Form/demo/basic.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/message",
    "component": require('/Users/laiguolin/Workspace/notebook/react/packages/pomelo/Form/demo/message.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/dynamic",
    "component": require('/Users/laiguolin/Workspace/notebook/react/packages/pomelo/Form/demo/dynamic.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/grid-form",
    "component": require('/Users/laiguolin/Workspace/notebook/react/packages/pomelo/Form/demo/grid-form.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/form-in-modal",
    "component": require('/Users/laiguolin/Workspace/notebook/react/packages/pomelo/Form/demo/form-in-modal.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/layout",
    "component": require('/Users/laiguolin/Workspace/notebook/react/packages/pomelo/Layout/demo/layout.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/modal-table",
    "component": require('/Users/laiguolin/Workspace/notebook/react/packages/pomelo/Modal/demo/ModalTable.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-1",
    "component": require('/Users/laiguolin/Workspace/notebook/react/packages/pomelo/Table/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/table-option",
    "component": require('/Users/laiguolin/Workspace/notebook/react/packages/pomelo/Table/demo/TableOption.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/table-form",
    "component": require('/Users/laiguolin/Workspace/notebook/react/packages/pomelo/Table/demo/TableForm.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/watermark",
    "component": require('/Users/laiguolin/Workspace/notebook/react/packages/pomelo/Upload/demo/Watermark.tsx').default,
    "exact": true
  },
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('/Users/laiguolin/Workspace/notebook/react/node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"全家桶","meta":{}}],"/hooks":[{"path":"/hooks/hooks","title":"Hooks","meta":{}},{"title":"LifeCycle","path":"/hooks/life-cycle","meta":{},"children":[{"path":"/hooks/life-cycle/use-mount","title":"useMount","meta":{}}]},{"title":"React","path":"/hooks/react","meta":{},"children":[{"path":"/hooks/react/use-callback","title":"useCallback","meta":{}},{"path":"/hooks/react/use-drop","title":"useDrag","meta":{}},{"path":"/hooks/react/use-ref","title":"useRef","meta":{}}]}],"/jest":[{"title":"异步","path":"/jest/async","meta":{},"children":[{"path":"/jest/async/fetch","title":"Fetch","meta":{"order":1}},{"path":"/jest/async/axios","title":"Axios","meta":{}},{"path":"/jest/async/timer","title":"定时器","meta":{}}]},{"path":"/jest/jest","title":"Jest","meta":{}},{"title":"匹配器","path":"/jest/matcher","meta":{},"children":[{"path":"/jest/matcher","title":"基本使用","meta":{"order":1}},{"path":"/jest/matcher/dom","title":"Dom","meta":{}}]},{"title":"Mock","path":"/jest/mock","meta":{},"children":[]},{"title":"Snapshot","path":"/jest/snapshot","meta":{},"children":[{"path":"/jest/snapshot","title":"快照","meta":{}}]}],"/pomelo":[{"title":"Authority","path":"/pomelo/authority","meta":{},"children":[]},{"title":"Form","path":"/pomelo/form","meta":{},"children":[]},{"title":"Layout","path":"/pomelo/layout","meta":{},"children":[]},{"title":"Login","path":"/pomelo/login","meta":{},"children":[]},{"title":"Modal","path":"/pomelo/modal","meta":{},"children":[]},{"path":"/pomelo/pomelo","title":"Pomelo","meta":{}},{"title":"Table","path":"/pomelo/table","meta":{},"children":[]},{"title":"Template","path":"/pomelo/template","meta":{},"children":[]},{"title":"Upload","path":"/pomelo/upload","meta":{},"children":[]}]}},"locales":[],"navs":{"*":[{"title":"Hooks","path":"/hooks","order":1},{"title":"Jest","path":"/jest"},{"title":"Pomelo","path":"/pomelo"}]},"title":"橙柚","logo":"https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/desktop.jpg","mode":"site"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('/Users/laiguolin/Workspace/notebook/react/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1587975118301,
          "hero": {
            "title": "React",
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
              "title": "Jest",
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
        "path": "/hooks/hooks",
        "component": require('/Users/laiguolin/Workspace/notebook/react/packages/hooks/hooks.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/hooks.md",
          "updatedTime": 1587975246213,
          "title": "Hooks",
          "nav": {
            "title": "Hooks",
            "path": "/hooks",
            "order": 1
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Hooks",
              "heading": "hooks"
            },
            {
              "depth": 2,
              "value": "参考",
              "heading": "参考"
            },
            {
              "depth": 2,
              "value": "hooks",
              "heading": "hooks-1"
            }
          ]
        },
        "title": "Hooks"
      },
      {
        "path": "/hooks/react/use-callback",
        "component": require('/Users/laiguolin/Workspace/notebook/react/packages/hooks/useCallback/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/useCallback/index.md",
          "updatedTime": 1585815337382,
          "title": "useCallback",
          "nav": {
            "title": "Hooks",
            "path": "/hooks"
          },
          "group": {
            "title": "React",
            "path": "/hooks/react"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useCallback",
              "heading": "usecallback"
            }
          ]
        },
        "title": "useCallback"
      },
      {
        "path": "/hooks/react/use-drop",
        "component": require('/Users/laiguolin/Workspace/notebook/react/packages/hooks/useDrop/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/useDrop/index.md",
          "updatedTime": 1587543920028,
          "title": "useDrag",
          "nav": {
            "title": "Hooks",
            "path": "/hooks"
          },
          "group": {
            "title": "React",
            "path": "/hooks/react"
          },
          "slugs": []
        },
        "title": "useDrag"
      },
      {
        "path": "/hooks/life-cycle/use-mount",
        "component": require('/Users/laiguolin/Workspace/notebook/react/packages/hooks/useMount/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/useMount/index.md",
          "updatedTime": 1584926140249,
          "title": "useMount",
          "nav": {
            "title": "Hooks",
            "path": "/hooks"
          },
          "group": {
            "title": "LifeCycle",
            "path": "/hooks/life-cycle"
          },
          "slugs": []
        },
        "title": "useMount"
      },
      {
        "path": "/hooks/react/use-ref",
        "component": require('/Users/laiguolin/Workspace/notebook/react/packages/hooks/useRef/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/useRef/index.md",
          "updatedTime": 1585812312632,
          "title": "useRef",
          "nav": {
            "title": "Hooks",
            "path": "/hooks"
          },
          "group": {
            "title": "React",
            "path": "/hooks/react"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "DOM",
              "heading": "dom"
            },
            {
              "depth": 2,
              "value": "任意值",
              "heading": "任意值"
            },
            {
              "depth": 2,
              "value": "回调 Ref",
              "heading": "回调-ref"
            }
          ]
        },
        "title": "useRef"
      },
      {
        "path": "/jest/jest",
        "component": require('/Users/laiguolin/Workspace/notebook/react/packages/jest/jest.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/jest/jest.md",
          "updatedTime": 1586420897617,
          "title": "Jest",
          "nav": {
            "title": "Jest",
            "path": "/jest"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Library",
              "heading": "library"
            },
            {
              "depth": 2,
              "value": "静态类型检查",
              "heading": "静态类型检查"
            },
            {
              "depth": 2,
              "value": "单元测试",
              "heading": "单元测试"
            },
            {
              "depth": 2,
              "value": "集成测试",
              "heading": "集成测试"
            },
            {
              "depth": 2,
              "value": "e2e 测试",
              "heading": "e2e-测试"
            }
          ]
        },
        "title": "Jest"
      },
      {
        "path": "/jest/async/axios",
        "component": require('/Users/laiguolin/Workspace/notebook/react/packages/jest/axios/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/jest/axios/index.md",
          "updatedTime": 1586571690081,
          "title": "Axios",
          "nav": {
            "title": "Jest",
            "path": "/jest"
          },
          "group": {
            "title": "异步",
            "path": "/jest/async"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Axios",
              "heading": "axios"
            },
            {
              "depth": 2,
              "value": "测试",
              "heading": "测试"
            }
          ]
        },
        "title": "Axios"
      },
      {
        "path": "/jest/matcher/dom",
        "component": require('/Users/laiguolin/Workspace/notebook/react/packages/jest/dom/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/jest/dom/index.md",
          "updatedTime": 1586664025281,
          "title": "Dom",
          "nav": {
            "title": "Jest",
            "path": "/jest"
          },
          "group": {
            "title": "匹配器",
            "path": "/jest/matcher"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "DOM",
              "heading": "dom"
            }
          ]
        },
        "title": "Dom"
      },
      {
        "path": "/jest/async/fetch",
        "component": require('/Users/laiguolin/Workspace/notebook/react/packages/jest/fetch/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/jest/fetch/index.md",
          "updatedTime": 1586574368181,
          "title": "Fetch",
          "order": 1,
          "nav": {
            "title": "Jest",
            "path": "/jest"
          },
          "group": {
            "title": "异步",
            "path": "/jest/async"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Fetch",
              "heading": "fetch"
            }
          ]
        },
        "title": "Fetch"
      },
      {
        "path": "/jest/matcher",
        "component": require('/Users/laiguolin/Workspace/notebook/react/packages/jest/matcher/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/jest/matcher/index.md",
          "updatedTime": 1586663504768,
          "title": "基本使用",
          "order": 1,
          "nav": {
            "title": "Jest",
            "path": "/jest"
          },
          "group": {
            "title": "匹配器",
            "path": "/jest/matcher"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "基本类型",
              "heading": "基本类型"
            },
            {
              "depth": 2,
              "value": "布尔值",
              "heading": "布尔值"
            }
          ]
        },
        "title": "基本使用"
      },
      {
        "path": "/jest/mock",
        "component": require('/Users/laiguolin/Workspace/notebook/react/packages/jest/mock/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/jest/mock/index.md",
          "updatedTime": 1585906155440,
          "title": "Mock",
          "nav": {
            "title": "Jest",
            "path": "/jest"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Mock",
              "heading": "mock"
            },
            {
              "depth": 2,
              "value": "同步",
              "heading": "同步"
            }
          ],
          "group": {
            "path": "/jest/mock",
            "title": "Mock"
          }
        },
        "title": "Mock"
      },
      {
        "path": "/jest/snapshot",
        "component": require('/Users/laiguolin/Workspace/notebook/react/packages/jest/snapshot/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/jest/snapshot/index.md",
          "updatedTime": 1586310253827,
          "title": "快照",
          "nav": {
            "title": "Jest",
            "path": "/jest"
          },
          "slugs": [],
          "group": {
            "path": "/jest/snapshot",
            "title": "Snapshot"
          }
        },
        "title": "快照"
      },
      {
        "path": "/jest/async/timer",
        "component": require('/Users/laiguolin/Workspace/notebook/react/packages/jest/timer/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/jest/timer/index.md",
          "updatedTime": 1586657962062,
          "title": "定时器",
          "nav": {
            "title": "Jest",
            "path": "/jest"
          },
          "group": {
            "title": "异步",
            "path": "/jest/async"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "setTimeout",
              "heading": "settimeout"
            }
          ]
        },
        "title": "定时器"
      },
      {
        "path": "/pomelo/pomelo",
        "component": require('/Users/laiguolin/Workspace/notebook/react/packages/pomelo/pomelo.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/pomelo/pomelo.md",
          "updatedTime": 1586244232855,
          "title": "Pomelo",
          "nav": {
            "title": "Pomelo",
            "path": "/pomelo"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Pomelo",
              "heading": "pomelo"
            }
          ]
        },
        "title": "Pomelo"
      },
      {
        "path": "/pomelo/authority",
        "component": require('/Users/laiguolin/Workspace/notebook/react/packages/pomelo/Authority/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/pomelo/Authority/index.md",
          "updatedTime": 1585620519283,
          "title": "Authority",
          "nav": {
            "title": "Pomelo",
            "path": "/pomelo"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "权限",
              "heading": "权限"
            },
            {
              "depth": 2,
              "value": "权限检查",
              "heading": "权限检查"
            }
          ],
          "group": {
            "path": "/pomelo/authority",
            "title": "Authority"
          }
        },
        "title": "Authority"
      },
      {
        "path": "/pomelo/form",
        "component": require('/Users/laiguolin/Workspace/notebook/react/packages/pomelo/Form/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/pomelo/Form/index.md",
          "updatedTime": 1585620773286,
          "title": "Form",
          "nav": {
            "title": "Pomelo",
            "path": "/pomelo"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "表单",
              "heading": "表单"
            },
            {
              "depth": 2,
              "value": "基本",
              "heading": "基本"
            },
            {
              "depth": 2,
              "value": "效验信息",
              "heading": "效验信息"
            },
            {
              "depth": 2,
              "value": "动态",
              "heading": "动态"
            },
            {
              "depth": 2,
              "value": "格栅布局",
              "heading": "格栅布局"
            },
            {
              "depth": 2,
              "value": "弹窗表单",
              "heading": "弹窗表单"
            },
            {
              "depth": 3,
              "value": "使用场景",
              "heading": "使用场景"
            },
            {
              "depth": 3,
              "value": "FQA",
              "heading": "fqa"
            }
          ],
          "group": {
            "path": "/pomelo/form",
            "title": "Form"
          }
        },
        "title": "Form"
      },
      {
        "path": "/pomelo/layout",
        "component": require('/Users/laiguolin/Workspace/notebook/react/packages/pomelo/Layout/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/pomelo/Layout/index.md",
          "updatedTime": 1585620352245,
          "title": "Layout",
          "nav": {
            "title": "Pomelo",
            "path": "/pomelo"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Umi 3 菜单配置",
              "heading": "umi-3-菜单配置"
            },
            {
              "depth": 3,
              "value": "编译时配置",
              "heading": "编译时配置"
            },
            {
              "depth": 3,
              "value": "运行时配置",
              "heading": "运行时配置"
            }
          ],
          "group": {
            "path": "/pomelo/layout",
            "title": "Layout"
          }
        },
        "title": "Layout"
      },
      {
        "path": "/pomelo/login",
        "component": require('/Users/laiguolin/Workspace/notebook/react/packages/pomelo/Login/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/pomelo/Login/index.md",
          "updatedTime": 1585620309650,
          "title": "Login",
          "nav": {
            "title": "Pomelo",
            "path": "/pomelo"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "登录",
              "heading": "登录"
            },
            {
              "depth": 2,
              "value": "流程",
              "heading": "流程"
            },
            {
              "depth": 2,
              "value": "",
              "heading": ""
            }
          ],
          "group": {
            "path": "/pomelo/login",
            "title": "Login"
          }
        },
        "title": "Login"
      },
      {
        "path": "/pomelo/modal",
        "component": require('/Users/laiguolin/Workspace/notebook/react/packages/pomelo/Modal/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/pomelo/Modal/index.md",
          "updatedTime": 1586306869384,
          "title": "Modal",
          "nav": {
            "title": "Pomelo",
            "path": "/pomelo"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "对话框",
              "heading": "对话框"
            },
            {
              "depth": 2,
              "value": "Table",
              "heading": "table"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ],
          "group": {
            "path": "/pomelo/modal",
            "title": "Modal"
          }
        },
        "title": "Modal"
      },
      {
        "path": "/pomelo/table",
        "component": require('/Users/laiguolin/Workspace/notebook/react/packages/pomelo/Table/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/pomelo/Table/index.md",
          "updatedTime": 1587539099667,
          "title": "Table",
          "nav": {
            "title": "列表",
            "path": "/pomelo"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Todo",
              "heading": "todo"
            },
            {
              "depth": 2,
              "value": "Table",
              "heading": "table"
            },
            {
              "depth": 2,
              "value": "默认分页信息",
              "heading": "默认分页信息"
            },
            {
              "depth": 2,
              "value": "数据请求",
              "heading": "数据请求"
            },
            {
              "depth": 3,
              "value": "Opitons",
              "heading": "opitons"
            },
            {
              "depth": 2,
              "value": "操作列",
              "heading": "操作列"
            },
            {
              "depth": 2,
              "value": "表单",
              "heading": "表单"
            }
          ],
          "group": {
            "path": "/pomelo/table",
            "title": "Table"
          }
        },
        "title": "Table"
      },
      {
        "path": "/pomelo/template",
        "component": require('/Users/laiguolin/Workspace/notebook/react/packages/pomelo/Template/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/pomelo/Template/index.md",
          "updatedTime": 1586397416489,
          "title": "Template",
          "nav": {
            "title": "Pomelo",
            "path": "/pomelo"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "模板",
              "heading": "模板"
            },
            {
              "depth": 2,
              "value": "Empty Page",
              "heading": "empty-page"
            },
            {
              "depth": 2,
              "value": "Service.ts",
              "heading": "servicets"
            },
            {
              "depth": 2,
              "value": "码表",
              "heading": "码表"
            }
          ],
          "group": {
            "path": "/pomelo/template",
            "title": "Template"
          }
        },
        "title": "Template"
      },
      {
        "path": "/pomelo/upload",
        "component": require('/Users/laiguolin/Workspace/notebook/react/packages/pomelo/Upload/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/pomelo/Upload/index.md",
          "updatedTime": 1585812312566,
          "title": "Upload",
          "nav": {
            "title": "Pomelo",
            "path": "/pomelo"
          },
          "group": {
            "title": "Upload",
            "path": "/pomelo/upload"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Upload",
              "heading": "upload"
            },
            {
              "depth": 2,
              "value": "水印",
              "heading": "水印"
            },
            {
              "depth": 2,
              "value": "图片上传",
              "heading": "图片上传"
            },
            {
              "depth": 2,
              "value": "获取 base64",
              "heading": "获取-base64"
            }
          ]
        },
        "title": "Upload"
      },
      {
        "path": "/hooks",
        "meta": {
          "order": 1
        },
        "exact": true,
        "redirect": "/hooks/hooks"
      },
      {
        "path": "/hooks/react",
        "meta": {},
        "exact": true,
        "redirect": "/hooks/react/use-callback"
      },
      {
        "path": "/hooks/life-cycle",
        "meta": {},
        "exact": true,
        "redirect": "/hooks/life-cycle/use-mount"
      },
      {
        "path": "/jest",
        "meta": {},
        "exact": true,
        "redirect": "/jest/async/fetch"
      },
      {
        "path": "/jest/async",
        "meta": {},
        "exact": true,
        "redirect": "/jest/async/fetch"
      },
      {
        "path": "/pomelo",
        "meta": {},
        "exact": true,
        "redirect": "/pomelo/authority"
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
