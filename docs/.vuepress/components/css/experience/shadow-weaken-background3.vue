<template>
  <main>
    <button onclick="document.querySelector('#modal').showModal()">Click me</button>
    <dialog id="modal">
      CSS NoteBook
      <button onclick="this.parentNode.close()">Close</button>
    </dialog>
  </main>
</template>

<style scoped>
main {
  padding: 10px;
}

dialog::backdrop {
  background: rgba(0, 0, 0, 0.8);
}
</style>