import { defineConfig } from 'dumi';

export default defineConfig({
  title: '橙柚',
  mode: 'site',
  logo: 'https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/desktop.jpg',
  base: '/notebook',
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  // more config: https://d.umijs.org/config
});
