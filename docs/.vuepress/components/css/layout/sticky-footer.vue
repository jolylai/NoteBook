<template>
  <div>
    <header>Header</header>
    <main>Main</main>
    <footer>Footer</footer>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-flow: column;

  min-height: 200px;
  background: yellowgreen;
}
main {
  flex: 1;
}
</style>