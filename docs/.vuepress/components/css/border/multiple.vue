<template>
  <main>
    <p>top</p>
    <div>Multiple borders!</div>
    <p>bottom</p>
  </main>
</template>

<style scoped lang='stylus'>
@import '../../../override.styl';

main {
  // padding: 2em;
}

p {
  padding: 0;
  margin: 0;
}

div {
  margin: 30px;
  box-shadow: 0 0 0 10px $primaryColor, 0 0 0 20px $successColor, 0 0 0 30px $warningColor;
}
</style>