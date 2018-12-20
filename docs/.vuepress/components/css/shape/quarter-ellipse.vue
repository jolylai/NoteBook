<template>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}
li {
  height: 120px;
  width: 160px;
  margin: 6px;
  background: yellowgreen;
}

li:first-child {
  border-radius: 100% 0 0 0;
}
li:nth-child(2) {
  border-radius: 0 100% 0 0;
}
li:nth-child(3) {
  border-radius: 0 0 0 100%;
}
li:nth-child(4) {
  border-radius: 0 0 100% 0;
}
</style>