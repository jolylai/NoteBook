# 地图

## 引入

```ts
import { defineConfig } from 'umi';

export default defineConfig({
  externals: {
    QMap: 'qq.maps',
  },
  scripts: [
    'https://map.qq.com/api/js?v=2.exp&key=DSABZ-2CNK4-VP6U7-DLBHZ-KNLBS-H3BXB',
  ],
});
```

## 使用

```ts
import QMap from 'QMap';

new QMap.Map(this.refs.map, this.props.options);
```
