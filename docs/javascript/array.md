# Array

::: tip

数组中处理的方法

:::

## ArrayConcat

```js
const ArrayConcat = (arr, ...args) => [].concat(arr, ...args);
```

::: tip

- Array.concat(value1[, value2[, ...[, valueN]]])

  - value 可以是值或数组
  - 当 value 为数组的时候 [1].concat([2]) -> [1,2]

- 使用 `...args` 获取传入的其余参数, 为数组

:::

## difference

找出 a 与 b 的交集的 a 的补集

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};
// difference([1,2,3], [1,2]) -> [3]
```

## include

```js
const includes = (collection, val, fromIndex = 0) =>
  collection.slice(fromIndex).indexOf(val) != -1;
// includes("30-seconds-of-code", "code") -> true
// includes([1, 2, 3, 4], [1, 2], 1) -> false
```

::: tip

- 同时支持数组和字符串
- Array.include()
  :::

## intersection

a 与 b 的交集

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

const intersection = (a, b) => a.filter(x => b.includes(x));

// intersection([1,2,3], [4,3,2]) -> [2,3]
```

## remove

移除数组的元素

```js
const remove = (arr, func) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
        arr.splice(arr.indexOf(val), 1);
        return acc.concat(val);
      }, [])
    : [];

//  remove([1, 2, 3, 4], n => n % 2 == 0) -> [2, 4]
```

::: tip

- 使用 `Array.splice(start[, deleteCount[, item1[, item2[, ...]]]])` 移除数组中的元素
- 修改了传入的 arr
- 以数组的形式返回别删除的元素
  :::

## sample

随机获取数组中的一个元素

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

// sample([3, 7, 9, 11]) -> 9
```

## union

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));
const union = (a, b) => [...new Set([...a, ...b])];

// union([1,2,3], [4,3,2]) -> [1,2,3,4]
```

## without

```js
const without = (arr, ...args) => arr.filter(v => args.indexOf(v) === -1);

// without[2, 1, 2, 3], 1, 2) -> [3]
// without([2, 1, 2, 3, 4, 5, 5, 5, 3, 2, 7, 7], 3, 1, 5, 2) -> [ 4, 7, 7 ]
```

## zip

```js
const zip = (...arrays) => {
  const maxLength = Math.max.apply(null, arrays.map(a => a.length));
  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
  });
};
//zip(['a', 'b'], [1, 2], [true, false]); -> [['a', 1, true], ['b', 2, false]]
//zip(['a'], [1, 2], [true, false]); -> [['a', 1, true], [undefined, 2, false]]
```

::: tip

- 获取数组中的最大值 `maxLength = Math.max.apply(null, arrays.map(a => a.length))`
  :::

## average

计算平均值

```js
const average = arr => arr.reduce((acc, val) => acc + val, 0) / arr.length;
// average([1,2,3]) -> 2
```

## chunk

```js
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

// chunk([1,2,3,4,5], 2) -> [[1,2],[3,4],[5]]
```

::: tip

- [Array.from()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
  :::

## compact

过滤掉 falsey values (false, null, 0, "", undefined, and NaN).

```js
const compact = arr => arr.filter(v => v);
// compact([0, 1, false, 2, '', 3, 'a', 'e'*23, NaN, 's', 34]) -> [ 1, 2, 3, 'a', 's', 34 ]
```

## occurrences

计算某个值在数组中出现的次数

```js
const countOccurrences = (arr, value) =>
  arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0);
// countOccurrences([1,1,2,1,2,3], 1) -> 3
```

## take

获取数组中从第一位开始的前 n 个元素

```js
const take = (arr, n = 1) => arr.slice(0, n);

// take([1, 2, 3], 5) -> [1, 2, 3]
// take([1, 2, 3], 0) -> []
```

## unique

```js
const unique = arr => [...new Set(arr)];

// unique([1,2,2,3,4,4,5]) -> [1,2,3,4,5]
```

::: tip

使用 ES6 中是 _Set_ 和 _..._ 去除掉重复的值
:::
