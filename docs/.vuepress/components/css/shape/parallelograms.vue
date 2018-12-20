<template>
  <main>平行四边形</main>
</template>

<style scoped>
main {
  position: relative;
  padding: 10px;
  margin: 0 20px;
}
main::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: yellowgreen;
  z-index: -1;
  transform: skew(-45deg);
}
</style>