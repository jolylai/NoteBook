<template>
  <main>
    <div>Transolucent border!</div>
  </main>
</template>

<style scoped lang='stylus'>
@import '../../../override.styl';

main {
  padding: 2em;
  background: $warningColor;
}

div {
  border: 10px solid hsla(0, 0%, 100%, 0.5);
  background: $primaryColor;
  background-clip: padding-box;
  color: #fff;
  max-width: 20em;
  padding: 12px;
  margin: 0 auto;
}
</style>