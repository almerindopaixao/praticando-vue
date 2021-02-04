<template>
  <div class="list-container">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .list-container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 20px;
    }
</style>