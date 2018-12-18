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
  background: repeating-linear-gradient(
    30deg,
    #79b,
    #79b 15px,
    #58a 0,
    #58a 30px
  );
}

li:nth-child(2) {
  background: #58a;
  background-image: repeating-linear-gradient(
    30deg,
    hsla(0, 0%, 100%, 0.1),
    hsla(0, 0%, 100%, 0.1) 15px,
    transparent 0,
    transparent 30px
  );
}
</style>