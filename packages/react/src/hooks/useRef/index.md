---
title: useRef
nav:
  title: Hooks
  path: /hooks
group:
  title: React
  path: /react
---

## DOM

当 ref 对象内容发生变化时，useRef 并不会通知你。变更 .current 属性不会引发组件重新渲染。

useRef 会在每次渲染时返回同一个 ref 对象。

ref 是一个对象时它并不会把当前 ref 的值的 变化 通知到我们。

<code src="./demo/Basic.tsx" />

## 任意值

<code src="./demo/Timer.tsx" />

## 回调 Ref

使用 callback ref 可以确保 即便子组件延迟显示被测量的节点 (比如为了响应一次点击)，我们依然能够在父组件接收到相关的信息，以便更新测量结果。

<code src="./demo/MeasureDom.tsx" />
