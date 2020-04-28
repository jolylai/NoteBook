---
title: 基本使用
order: 1
nav:
  title: Jest
  path: /jest
group:
  title: 匹配器
  path: /matcher
---

## 基本类型

```ts
describe('primitive type', () => {
  test('primitive', () => {
    // number
    expect(1).toBe(1);
    // string
    expect('1').toBe('1');
  });
});
```

## 布尔值

```js
test('Boolean', () => {
  expect(true).toBe(true);

  expect(false).toBe(false);
});
```

假值

```js
test('Falsy', () => {
  expect(false).toBeFalsy();
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(null).toBeFalsy();
  expect(undefined).toBeFalsy();
});
```

真值

```js
test('Boolean', () => {
  expect(true).toBeTruthy();
  expect(1).toBeTruthy();
  expect('1').toBeTruthy();
});
```
