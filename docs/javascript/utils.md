# 工具函数

::: tip
收集整理一些开发中常用的工具函数
:::

## fixedZero

```js
fixedZero(val) {
  const v = val * 1
  return v > 0 && v < 10 ? `0${val}` : val;
}
```

## isUrl

判读是否为 url

```js
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export function isUrl(path) {
  return reg.test(path);
}
```
