# 条纹背景

> CSS 线性渐变，background-size

## 水平条纹

```css
ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}

li {
  width: 100px;
  height: 80px;
  margin: 2px;
}

li:nth-child(1) {
  background: linear-gradient(yellowgreen, orange);
}

li:nth-child(2) {
  background: linear-gradient(yellowgreen 20%, orange 80%);
}

li:nth-child(3) {
  background: linear-gradient(yellowgreen 50%, orange 50%);
}

li:nth-child(4) {
  background: linear-gradient(yellowgreen 50%, orange 50%) no-repeat;
  background-size: 100% 30px;
}

li:nth-child(5) {
  background: linear-gradient(yellowgreen 50%, orange 50%);
  background-size: 100% 30px;
}

li:nth-child(6) {
  background: linear-gradient(yellowgreen 30%, orange 0);
  background-size: 100% 30px;
}
```

  <DemoBlock  demo='css-background-horizontal-stripes' />

::: tip

- 如果某个色标的位置值比整个列表中在它之前的色标的位置值都要
  小，则该色标的位置值会被设置为它前面所有色标位置值的最大值。(eg: li:nth-child(6))
  :::

## 垂直条纹

```css
ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}

li {
  width: 100px;
  height: 80px;
  margin: 2px;
  border: 1px solid #eee;
}

li:nth-child(1) {
  background: linear-gradient(to right, yellowgreen 50%, orange 0) no-repeat;
  background-size: 30px 100%;
}

li:nth-child(2) {
  background: linear-gradient(to right, yellowgreen 50%, orange 0);
  background-size: 30px 100%;
}
```

  <DemoBlock  demo='css-background-vertical-stripes' />

::: tip

- top to bottom (默认值)
- to top
- to right
- to left
- to bottom right
  :::
