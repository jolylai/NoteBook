<template>
  <main>
    <ul class="ul1">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
    <ul class="ul2">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
    <ul class="ul3">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
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

.ul1 > li:first-child:nth-last-child(4) {
  background: orange;
}
.ul2 > li:first-child:nth-last-child(4) ~ li {
  background: orange;
}

.ul3 > li:first-child:nth-last-child(4),
.ul3 > li:first-child:nth-last-child(4) ~ li {
  background: orange;
}
</style>