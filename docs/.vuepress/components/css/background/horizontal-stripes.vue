<template>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</template>

<style scoped lang='stylus'>
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
</style>