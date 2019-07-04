# 多环境配置

## config

config/config.cloud.js + config/config.prod.js + config/config.js .

```js
// https://umijs.org/config/
import os from "os";
import slash from "slash2";
import defaultSettings from "./defaultSettings";
import webpackPlugin from "./plugin.config";
import pageRouter from "./router.config";
const { pwa, primaryColor } = defaultSettings;

const { NODE_ENV, TEST } = process.env;

const plugins = [
  [
    "umi-plugin-react",
    {
      antd: true,
      dva: {
        hmr: true
      },
      locale: {
        // default false
        enable: true,
        // default zh-CN
        default: "zh-CN",
        // default true, when it is true, will use `navigator.language` overwrite default
        baseNavigator: true
      },
      dynamicImport: {
        loadingComponent: "./components/PageLoading/index",
        webpackChunkName: true,
        level: 3
      },
      pwa: pwa
        ? {
            workboxPluginMode: "InjectManifest",
            workboxOptions: {
              importWorkboxFrom: "local"
            }
          }
        : false,
      ...(!TEST && os.platform() === "darwin"
        ? {
            dll: {
              include: ["dva", "dva/router", "dva/saga", "dva/fetch"],
              exclude: ["@babel/runtime", "netlify-lambda"]
            },
            hardSource: false
          }
        : {})
    }
  ],
  [
    "umi-plugin-pro-block",
    {
      moveMock: false,
      moveService: false,
      modifyRequest: true,
      autoAddMenu: true
    }
  ]
];

const uglifyJSOptions =
  NODE_ENV === "production"
    ? {
        uglifyOptions: {
          // remove console.* except console.error
          compress: {
            drop_console: true,
            pure_funcs: ["console.error"]
          }
        }
      }
    : {};
export default {
  // add for transfer to umi
  plugins,
  define: {
    baseURL: "http://****"
  },
  block: {
    defaultGitUrl: "https://github.com/ant-design/pro-blocks"
  },
  treeShaking: true,
  targets: {
    ie: 11
  },
  // 路由配置
  routes: pageRouter,
  // Theme for antd
  // https://ant.design/docs/react/customize-theme-cn
  theme: {
    "primary-color": primaryColor
  },
  // proxy: {
  //   '/api/': {
  //     target: 'http://coordinate-dev.linesum.com/api',
  //     changeOrigin: true,
  //   },
  // },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true
  },
  disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (context, localIdentName, localName) => {
      if (
        context.resourcePath.includes("node_modules") ||
        context.resourcePath.includes("ant.design.pro.less") ||
        context.resourcePath.includes("global.less")
      ) {
        return localName;
      }

      const match = context.resourcePath.match(/src(.*)/);

      if (match && match[1]) {
        const antdProPath = match[1].replace(".less", "");
        const arr = slash(antdProPath)
          .split("/")
          .map(a => a.replace(/([A-Z])/g, "-$1"))
          .map(a => a.toLowerCase());
        return `antd-pro${arr.join("-")}-${localName}`.replace(/--/g, "-");
      }

      return localName;
    }
  },
  manifest: {
    basePath: "/"
  },
  uglifyJSOptions,
  chainWebpack: webpackPlugin
};
```

## package.json

```json
{
  "start": "cross-env UMI_ENV=cloud APP_TYPE=site umi dev",
  "build": "cross-env UMI_ENV=prod umi build"
}
```