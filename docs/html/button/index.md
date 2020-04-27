---
title: Button
nav:
  title: HTML
  path: /html
  order: 1
# group:
#   title: Button
#   path: /button
---

## Button

<code src="./demo/Button.tsx" />

### 禁用

```css
.btn[disabled] {
  cursor: not-allowed;
  border-color: #dbdbdb;
  box-shadow: none;
  opacity: 0.5;
}

.btn:disabled {
  cursor: not-allowed;
  border-color: #dbdbdb;
  box-shadow: none;
  opacity: 0.5;
}
```

### 图标

水平居中

`vertical-align`方法

```css
.btn .icon {
  line-height: 0;
  vertical-align: -0.125em;
}
```

Flex 方法

```css
.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  vertical-align: top;
}

.icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
```

边距

```css
.icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.btn .icon {
  width: 1.5em;
  height: 1.5em;
}

.btn .icon:first-child {
  margin-right: 0.25em;
}
```

### 伪类

button 中的 active 具体作用？

```css
.btn:active {
  border-color: #4a4a4a;
  color: #363636;
  color: red;
}

// 聚焦
.btn:focus {
  // 去除默认
  outline: 0;

  border-color: #3273dc;
  color: #363636;
}

.btn:focus:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
}
```

Q: 为什么不使用 outline？
A: outline 并不会沿着边框， button 设置圆角后如果使用 outline 圆角和 边框就会存在间隙

## ButtonGroup

<code src="./demo/ButtonGroup.tsx" />

### 圆角

```css
.btn-group > .btn:first-child {
  border-radius: 0.25em 0 0 0.25em;
}

.btn-group > .btn:last-child {
  border-radius: 0 0.25em 0.25em 0;
}
```

### 边框合并

使用负 margin，但是 border 有透明色则会导致重叠的 border 的颜色加深

```css
.btn-group > .btn:not(:last-child) {
  margin-right: -1px;
}
```

重置边框单个

```css
.btn-group > .btn:not(:last-child) {
  border-right: none;
}
```

`<summary>` 的 display：list-item 导致三个 buttonGroup 没有在同一条直线上
