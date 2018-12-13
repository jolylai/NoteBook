# CSS

::: tip 写在前面
此部分主要为[《CSS 揭秘》](http://play.csssecrets.io/)一书和[张鑫旭](https://www.zhangxinxu.com/wordpress/)博客中的例子的学习和总结，同时推荐一些 github 上好的 CSS 库
:::

## 基础

- [选择器](./selector.md)

## 进阶

- [《CSS 揭秘》](http://play.csssecrets.io/)
- [张鑫旭](https://www.zhangxinxu.com/wordpress/)

## GitHub 上值得一看和学习的 CSS 库

- [Hover](https://github.com/IanLunn/Hover)

## 元素尺寸

- 元素尺寸：包含 `padding` 和 `border` 即 `border-box` 的尺寸， js 中为 `offsetWidth` 和 `offsetHeight`
- 元素内部尺寸：包含 `padding` 但不包括 `border` 的尺寸，js 中为 `clientWidth` 和 `clientHeight`
- 元素外面尺寸： 包含 `padding` 、`border` 和 `margin`, 没有原生 DOM api

## 脚本和样式提升

有时，你可以只想在当前页面应用一些 JavaScript 或者 CSS，在这种情况下，你可以直接在 Markdown 文件中使用原生的 `<script>` 或者 `<style>` 标签，它们将会从编译后的 HTML 文件中提取出来，并作为生成的 Vue 单文件组件的 `<script>` 和 `<style>` 标签。

<p class="demo" :class="$style.example">
  <span>这个</span>
</p>

<style module>
.example {
  color: #41b883;
  
}
</style>
