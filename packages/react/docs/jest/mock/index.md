---
title: Mock
nav:
  title: Jest
  path: /jest
---

# Mock

监听函数被其他代码调用的情况，而不仅仅测试函数返回的值

## 同步

我们对数组 `[1,2,3]` 的每一项加一

```ts
const arr = [1, 2, 3];
const callback = (currentValue, index, array) => currentValue + 1;
const result = arr.map(callback);
// [2,3,4]
```
