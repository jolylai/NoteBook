<template>
  <ul>
    <li>+</li>
    <li>+</li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}

li {
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  background: yellowgreen;
  margin-right: 10px;
  cursor: pointer;
}

li:first-child {
  border: 10px solid transparent;
  background-clip: padding-box;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3) inset;
}

li:nth-child(2) {
  border: 10px solid transparent;
  background-clip: padding-box;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3) inset,
    0 0.1em 0.2em -0.05em rgba(0, 0, 0, 0.5);
}
</style>