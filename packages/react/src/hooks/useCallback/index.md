---
title: useCallback
nav:
  title: Hooks
  path: /hooks
group:
  title: React
  path: /react
---

# useCallback

```js
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

返回一个 memoized 回调函数。

<code src="./index.tsx" />
