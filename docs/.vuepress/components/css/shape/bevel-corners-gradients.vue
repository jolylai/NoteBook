<template>
  <ul>
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
  width: 120px;
  height: 120px;
  margin: 6px;
  box-shadow: 0 4px 6px #eee;
}
li:first-child {
  background: linear-gradient(-45deg, transparent 15px, yellowgreen 0);
}
li:nth-child(2) {
  background: linear-gradient(-45deg, transparent 15px, yellowgreen 0) right,
    linear-gradient(45deg, transparent 15px, yellowgreen 0) left;
  background-size: 50% 100%;
  background-repeat: no-repeat;
}
li:nth-child(3) {
  background: linear-gradient(135deg, transparent 15px, yellowgreen 0) top left,
    linear-gradient(-135deg, transparent 15px, yellowgreen 0) top right,
    linear-gradient(45deg, transparent 15px, yellowgreen 0) bottom left,
    linear-gradient(-45deg, transparent 15px, yellowgreen 0) bottom right;
  background-size: 50%;
  background-repeat: no-repeat;
}
</style>