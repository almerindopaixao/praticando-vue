<template>
  <div id="app">
    {{ titulo }}
    <button @click="titulo += '#'">Alterar2</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        titulo: 'Teste Data usando Vue Js'
      };
    }
  }
</script>

<style>
  #app {
    background-color: chocolate;
    color: #fff;
  }
</style>