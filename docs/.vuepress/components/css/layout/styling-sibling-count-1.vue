<template>
  <main>
    <ul>
      <li>1</li>
    </ul>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
  </main>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  line-height: 40px;
  font-weight: 500;
}

li {
  height: 40px;
  width: 40px;
  border-radius: 6px;
  margin-right: 10px;
  background: #eee;
}

li:only-child {
  position: relative;
  background: orange;
}
/* li:first-child:last-child {
  position: relative;
  background: orange;
} */

/* li:first-child:last-child::after {
  content: "\2713";
  height: 20px;
  width: 20px;
  top: -6px;
  right: -6px;
  position: absolute;
  background: yellowgreen;
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
} */
</style>