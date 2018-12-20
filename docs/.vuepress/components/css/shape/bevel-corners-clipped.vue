<template>
  <ul>
    <li></li>
    <li>
      <img src="http://csssecrets.io/images/adamcatlace.jpg">
    </li>
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
  background: #58a;
  clip-path: polygon(
    20px 0,
    calc(100% - 20px) 0,
    100% 20px,
    100% calc(100% - 20px),
    calc(100% - 20px) 100%,
    20px 100%,
    0 calc(100% - 20px),
    0 20px
  );
}
img {
  clip-path: polygon(
    20px 0,
    calc(100% - 20px) 0,
    100% 20px,
    100% calc(100% - 20px),
    calc(100% - 20px) 100%,
    20px 100%,
    0 calc(100% - 20px),
    0 20px
  );
}
</style>