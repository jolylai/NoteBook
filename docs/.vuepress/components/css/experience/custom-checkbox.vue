<template>
  <main>
    <input type="checkbox" id="custom-checkbox">
    <label for="custom-checkbox">自定义复选框</label>
    
    <input type="checkbox" id="custom-checkbox2" disabled>
    <label for="custom-checkbox2">自定义复选框</label>
  </main>
</template>

<style scoped>
main {
  padding: 10px;
}

input[type="checkbox"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
}

input[type="checkbox"] + label::before {
  content: "\a0";
  display: inline-block;
  width: 0.8em;
  height: 0.8em;
  line-height: 0.65;
  margin-right: 0.2em;
  border-radius: 0.2em;
  text-indent: 0.15em;
  background: silver;
}

input[type="checkbox"]:checked + label::before {
  content: "\2713";
  background: yellowgreen;
}

input[type="checkbox"]:focus + label::before {
  box-shadow: 0 0 0.1em 0.1em #58a;
}

input[type="checkbox"]:disabled + label::before {
  background: gray;
  box-shadow: none;
  color: #555;
}
</style>