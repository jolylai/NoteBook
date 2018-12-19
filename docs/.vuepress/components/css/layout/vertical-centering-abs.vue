<template>
  <main>
    <h1>Center me, please!</h1>
  </main>
</template>

<style scoped>
main {
  height: 200px;
  background: yellowgreen;
  text-align: center;
  position: relative;
}

h1 {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>