---
title: 背景
nav:
  title: CSS
  path: /css
group:
  title: 盒子模型
  path: /box-model
---

## 背景与边框

默认情况下，`背景会延伸到边框所在的区域下层`。我们可以通过 `background-clip` 属性来调整上述默认行为所带来的不便。这个属性的初始值是 `border-box`，意味着背景会被元素的 `border box`
（边框的外沿框）裁切掉。如果不希望背景侵入边框所在的范围，我们要做
的就是把它的值设为 `padding-box`，这样浏览器就会用内边距的外沿来把背
景裁切掉。具体效果可以看以下 demo

<code src="./demo/Demo1.tsx" inline />
