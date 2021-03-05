<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="green darken-3 white--text">
      <v-card-title class="headline">
        <strong>{{stock.name }} <small>(Preço: {{stock.price }})</small></strong>
      </v-card-title>
    </v-card>

    <v-card>
      <v-container fill-height>
        <v-text-field 
          label="Quantidade" 
          type="number"
          min="0"
          v-model.number="quantity" 
        />
        <v-btn
        @click="buyStock" 
          :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
          class="green darken-3 white--text"
        >
          Comprar
        </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    stock: {
      type: Object,
      required: true,
      default() {
        return { id: 45488, name: 'TESTE', price: 0 };
      },
    },
  },

  data() {
    return {
      quantity: 0,
    };
  },

  computed: {
    funds() {
      return this.$store.getters['portfolio/funds'];
    },

    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
  },

  methods: {
    buyStock(){
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };

      this.$store.dispatch('stocks/buyStock', order);
      this.quantity = 0;
    }
  }
}
</script>

<style>

</style>