import { ApplyPluginsType } from '/Users/laiguolin/Workspace/notebook/notebook/node_modules/@umijs/runtime/dist/index.js';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('/Users/laiguolin/Workspace/notebook/notebook/node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"README","meta":{"order":null}}]}},"locales":[],"navs":{},"title":"橙柚","logo":"https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/desktop.jpg","mode":"site"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('/Users/laiguolin/Workspace/notebook/notebook/README.md').default,
        "exact": true,
        "meta": {
          "locale": "en-US",
          "title": "README",
          "order": null
        },
        "title": "README"
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
