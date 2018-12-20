<template>
  <ul>
    <li></li>
    <li></li>
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
  box-sizing: border-box;
  border: 15px solid transparent;
  border-image: 1
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" fill="%2358a"><polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2"/></svg>');
}
li:nth-child(2) {
  box-sizing: border-box;
  border: 15px solid transparent;
  border-image: 1 fill
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" fill="%2358a"><polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2"/></svg>');
}
li:nth-child(3) {
  box-sizing: border-box;
  background: yellowgreen;
  background-clip: padding-box;
  border: 15px solid transparent;
  border-image: 1
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" fill="%2358a"><polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2"/></svg>');
}

li:nth-child(4) {
  box-sizing: border-box;
  background: yellowgreen;
  /* background-clip: padding-box; */
  border: 15px solid transparent;
  border-image: 1
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" fill="%2358a"><polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2"/></svg>');
  animation: coner 5s infinite linear;
}

@keyframes coner {
  to {
    border-width: 30px;
  }
}
</style>