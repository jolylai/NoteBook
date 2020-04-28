---
title: List
nav:
  title: HTML
  path: /html
  order: 1
---

## 水平

<code src="./demo/Horizontal.tsx" />

### 圆角

Q:为什么不使用

```css
.list .list-item:first-child {
  border-radius: 4px 4px 0 0;
}

.list .list-item:last-child {
  border-radius: 0 0 4px 4px;
}
```

而使用下面的 CSS 来设置圆角

```css
.list .list-item:first-child {
  border-top-left-radius: 0.25em;
  border-top-right-radius: 0.25em;
}

.list .list-item:last-child {
  border-bottom-left-radius: 0.25em;
  border-bottom-right-radius: 0.25em;
}
```

A: 当只用一个列表项的时候 `.list .list-item:first-child` 会被 `.list .list-item:last-child` 覆盖，这时只剩下下面的左右两个圆角

## 垂直

<code src="./demo/Vertical.tsx" />

### 合并边框

对列表中非第一个 item 合并边框

```css
.list-horizontal .list-item + .list-item {
  /* 推荐 */
  border-top: 0;
  /* or */
  margin-top: -1px;
}
```

```css
.list-horizontal .list-item:not(:first-child) {
  // 重置
  margin-top: 0;
  margin-left: -1px;
}
```

## 自定义

<code src="./demo/List.tsx" />
