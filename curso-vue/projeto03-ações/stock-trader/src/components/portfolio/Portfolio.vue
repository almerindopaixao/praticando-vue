<template>
  <v-layout row wrap>
    <Stock 
      :key="stock.id" 
      v-for="stock in stocksPortfolio" 
      :stock="stock"
    />
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from './Stock';
export default {
  components: { Stock },
  computed: {
    ...mapGetters('portfolio', ['stocksPortfolio'])
  },
}
</script>

<style>

</style>