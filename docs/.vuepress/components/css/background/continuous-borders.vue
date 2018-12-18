<template>
  <ul>
    <li></li>
    <li></li>
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
  box-sizing: border-box;
  border: 10px solid transparent;
  background: linear-gradient(white, white) padding-box, url('http://csssecrets.io/images/stone-art.jpg') border-box 0 / cover;
}

li:nth-child(2) {
  width: 180px;
  box-sizing: border-box;
  border: 10px solid transparent;
  background: linear-gradient(white, white) padding-box, repeating-linear-gradient(
    -45deg,
    red 0,
    red 12.5%,
    transparent 0,
    transparent 25%,
    #58a 0,
    #58a 37.5%,
    transparent 0,
    transparent 50%
  ) 0 / 5em 5em;
}

li:nth-child(3) {
  box-sizing: border-box;
  border: 1px solid transparent;
  background: linear-gradient(white, white) padding-box, repeating-linear-gradient(
    -45deg,
    black 0,
    black 25%,
    white 0,
    white 50%
  ) 0 / 0.6em 0.6em;
  animation: ants 12s linear infinite;
}

li:nth-child(4) {
  box-sizing: border-box;
  border-top: 0.2em solid transparent;
  border-image: 100% 0 0 linear-gradient(90deg, currentColor 4em, transparent 0);
}

@keyframes ants {
  to {
    background-position: 100%;
  }
}
</style>