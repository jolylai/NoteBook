<template>
  <ul>
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
  background: radial-gradient(
        circle at top left,
        transparent 15px,
        yellowgreen 0
      )
      top left,
    radial-gradient(circle at top right, transparent 15px, yellowgreen 0) top
      right,
    radial-gradient(circle at bottom right, transparent 15px, yellowgreen 0)
      bottom right,
    radial-gradient(circle at bottom left, transparent 15px, yellowgreen 0)
      bottom left;
  background-size: 50%;
  background-repeat: no-repeat;
}

li:nth-child(2) {
  background: radial-gradient(circle at 50% 0, transparent 15px, yellowgreen 0);
}
</style>