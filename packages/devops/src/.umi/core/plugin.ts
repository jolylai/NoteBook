import { Plugin } from '/Users/laiguolin/Workspace/notebook/react/node_modules/@umijs/runtime/dist/index.js';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','getInitialState','request',],
});
plugin.register({
  apply: require('/Users/laiguolin/Workspace/notebook/react/node_modules/@umijs/plugin-initial-state/lib/runtime'),
  path: '/Users/laiguolin/Workspace/notebook/react/node_modules/@umijs/plugin-initial-state/lib/runtime',
});
plugin.register({
  apply: require('/Users/laiguolin/Workspace/notebook/react/node_modules/@umijs/plugin-model/lib/runtime'),
  path: '/Users/laiguolin/Workspace/notebook/react/node_modules/@umijs/plugin-model/lib/runtime',
});

export { plugin };
