<template>
  <div class="demos">
    <slot>
      <component :is="demo" class="demos-content"/>
    </slot>
  </div>
</template>

<script>
export default {
  props: { demo: String }
}
</script>

<style scoped>
  .demos{
    border: 1px solid #B3A078;
    border-radius: 4px;
  }
</style>