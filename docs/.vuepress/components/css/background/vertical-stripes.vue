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
  width: 100px;
  height: 80px;
  margin: 2px;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
}

li:nth-child(1) {
  background: linear-gradient(to right, yellowgreen 50%, orange 0) no-repeat;
  background-size: 30px 100%;
}

li:nth-child(2) {
  background: linear-gradient(to right, yellowgreen 50%, orange 0);
  background-size: 30px 100%;
}
</style>