<template>
  <ul>
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
  position: relative;
  margin-top: 10px;
  box-shadow: 0 2px 4px #555;
}

li:first-child::before {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
}
</style>