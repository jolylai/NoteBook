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

## differenceBy

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

// differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); -> [1.2]
// differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); -> [ { x: 2 } ]
```

## differenceWith ⭐️

```js
const differenceWith = (arr, val, comp) =>
  arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

// differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); -> [1, 1.2]
```

::: tip

- [Array.findIndex](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
  :::

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
const without = (arr, ...args) => arr.filter(v => !args.includes(v));

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
const compact = arr => arr.filter(Boolean);

// compact([0, 1, false, 2, '', 3, 'a', 'e'*23, NaN, 's', 34]) -> [ 1, 2, 3, 'a', 's', 34 ]
```

## occurrences

计算某个值在数组中出现的次数

```js
const countOccurrences = (arr, value) =>
  arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0);
// countOccurrences([1,1,2,1,2,3], 1) -> 3
```

## deepFlatten

将数组扁平化

```js
const deepFlatten = arr =>
  [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

// deepFlatten([1,[2],[[3],4],5]) -> [1,2,3,4,5]
```

::: tip

- `[].concat(1, [2]) -> [1, 2]` `[].concat([1, [2]]) -> [1, [2]]`
- arr 为 `[1, [2]]` arr.map 返回的值为 `[1, [2]]`, 所有要...arr.map
- 化简为将 `[1, [2]]` 数组扁平化，然后递归
- :::

## dropElements

去除掉数组的第一个元素，直到 func 返回为 true

```js
const dropElements = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr.shift();
  return arr;
};

// dropElements([1, 2, 3, 4], n => n >= 3) -> [3,4]
```

## fillArray

一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

```js
const fillArray = (arr, value, start = 0, end = arr.length) =>
  arr.map((v, i) => (i >= start && i < end ? value : v));

// fillArray([1,2,3,4],'8',1,3) -> [1,'8','8',4]
```

::: tip

- Array.fill(value[, start[, end]])
  :::

## filterNonUnique

过滤掉数组中非唯一的值

```js
const filterNonUnique = arr =>
  arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

// filterNonUnique([1,2,2,3,4,4,5]) -> [1,3,5]
```

## filterNonUniqueBy 💯

```js
const filterNonUniqueBy = (arr, fn) =>
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));

//   filterNonUniqueBy(
//   [
//     { id: 0, value: 'a' },
//     { id: 1, value: 'b' },
//     { id: 2, value: 'c' },
//     { id: 1, value: 'd' },
//     { id: 0, value: 'e' }
//   ],
//   (a, b) => a.id == b.id
// ); -> [ { id: 2, value: 'c' } ]
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

使用 ES6 中是 `Set` 和 `...` 去除掉重复的值
:::

## all

```js
const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```

::: tip

- fn 默认为 [Boolean](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
  :::

## bifurcate

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [
    [],
    []
  ]);
```

::: tip

- 返回值 `(acc[filter[i] ? 0 : 1].push(val), acc)`, 将对象中的值改变并返回这个对象
  :::

## countBy

将数组的元素分类型计算其个数

```js
const countBy = (arr, fn) =>
  arr.map(typeof fn === "function" ? fn : val => val[fn]).reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
```

::: tip

- `typeof fn === 'function'` 检验传入的参数是否为函数
  :::
