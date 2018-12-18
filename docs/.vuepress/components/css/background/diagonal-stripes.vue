<template>
  <ul>
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
  width: 90px;
  height: 90px;
  margin: 4px;
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
}

li:nth-child(1) {
  background: linear-gradient(45deg, yellowgreen 25%, orange 0, orange 50%, yellowgreen 0, yellowgreen 75%, orange 0);
  background-size: 30px 30px;
}

li:nth-child(2) {
  background: repeating-linear-gradient(60deg, yellowgreen 0, yellowgreen 15px, orange 15px, orange 30px);
}
</style>