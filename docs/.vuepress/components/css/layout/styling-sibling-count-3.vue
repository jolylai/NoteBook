<template>
  <main>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
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

li:first-child:nth-last-child(n + 4),
li:first-child:nth-last-child(n + 4) ~ li {
  /* 当列表至少包含四项时，命中所有列表项 */
  background: orange;
}

li:first-child:nth-last-child(-n + 4),
li:first-child:nth-last-child(-n + 4) ~ li {
  background: yellowgreen;
}
</style>