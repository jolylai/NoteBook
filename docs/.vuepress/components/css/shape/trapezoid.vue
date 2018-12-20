<template>
  <main>trapezoid</main>
</template>

<style scoped>
main {
  margin: 10px;
  position: relative;
  display: inline-block;
  padding: 0.5em 1em 0.35em;
  color: white;
}
main::before {
  content: ""; /* 用伪元素来生成一个矩形 */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: #58a;
  transform: scaleY(1.3) perspective(0.5em) rotateX(5deg);
  transform-origin: bottom;
}
</style>