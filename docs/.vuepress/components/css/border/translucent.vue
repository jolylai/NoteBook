<template>
  <main>
    <div>Transolucent border!</div>
  </main>
</template>

<style scoped>
  main{
    padding: 2em;
    background: skyblue;
  }
  div{
    border: 10px solid hsla(0, 0%, 100%, .5);
    background: #be4141;
    background-clip: padding-box;

    max-width: 20em;
    padding: 12px;
    margin: 0 auto;
  }
</style>