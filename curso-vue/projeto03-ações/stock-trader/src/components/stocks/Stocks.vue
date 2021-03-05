<template>
  <v-layout row wrap>
    <Stock 
      :key="stock.id" 
      v-for="stock in stocks" 
      :stock="stock"
    />
  </v-layout>
</template>

<script>
import Stock from './Stock';

export default {
  components: { Stock },
  computed: {
    stocks() {
      return this.$store.getters['stocks/stocks'];
    }
  }
}
</script>

<style>

</style>