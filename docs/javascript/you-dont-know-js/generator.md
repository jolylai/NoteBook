# 生成器

## 打破完整运行

### 输入和输出

```js
function* foo(x) {
  const y = x * (yield);
  return y;
}

const it = foo(3);

// 启动foo(..)
it.next(); // { value: undefined, done: false }

// 把值 7 传回作为被暂停的 yield 表达式的结果
// 相当于把第一个 yield 替换成 7
it.next(7); // { value: 21, done: true }
```

### 多个迭代器

```js
function* foo() {
  var x = yield 2;
  z++;
  var y = yield x * z;
  console.log(x, y, z);
}
var z = 1;
var it1 = foo();
var it2 = foo();
var val1 = it1.next().value; // 2 <-- yield 2
var val2 = it2.next().value; // 2 <-- yield 2
val1 = it1.next(val2 * 10).value; // 40 <-- x:20, z:2
val2 = it2.next(val1 * 5).value; // 600 <-- x:200, z:3
it1.next(val2 / 2); // y:300
// 20 300 3
it2.next(val1 / 4); // y:10
// 200 10 3
```

## 生成器产生值

### 生产者与迭代器

假定你要产生一系列值，其中每个值都与前面一个有特定的关系。

使用闭包实现

```js
var gimmeSomething = (function() {
  var nextVal;
  return function() {
    if (nextVal === undefined) {
      nextVal = 1;
    } else {
      nextVal = 3 * nextVal + 6;
    }
    return nextVal;
  };
})();
gimmeSomething(); // 1
gimmeSomething(); // 9
gimmeSomething(); // 33
gimmeSomething(); // 105
```

使用迭代器实现

```js
var something = (function() {
  var nextVal;
  return {
    // for..of循环需要
    [Symbol.iterator]: function() {
      return this;
    },
    // 标准迭代器接口方法
    next: function() {
      if (nextVal === undefined) {
        nextVal = 1;
      } else {
        nextVal = 3 * nextVal + 6;
      }
      return { done: false, value: nextVal };
    }
  };
})();
something.next().value; // 1
something.next().value; // 9
something.next().value; // 33
something.next().value; // 105

function* something() {
  var nextVal;
  while (true) {
    if (nextVal === undefined) {
      nextVal = 1;
    } else {
      nextVal = 3 * nextVal + 6;
    }
    yield nextVal;
  }
}
```

ES6 还新增了一个 for..of 循环，这意味着可以通过原生循环语法自动迭代标准迭代器：

```js
for (var v of something) {
  console.log(v);
  // 不要死循环！
  if (v > 500) {
    break;
  }
}
// 1 9 33 105 321 969

// 以手工在迭代器上循环
for (var ret; (ret = something.next()) && !ret.done; ) {
  console.log(ret.value);
  // 不要死循环！
  if (ret.value > 500) {
    break;
  }
}
// 1 9 33 105 321 969
```

for..of 循环在每次迭代中自动调用 next()，它不会向 next() 传入任何值，并且会在接收
到 done:true 之后自动停止
