<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="blue darken-3 white--text">
      <v-card-title class="headline">
        <strong>
          {{stock.name }}
          <small>
            (Preço: {{stock.price | currency }}) | Qtde: {{ stock.quantity }}
          </small>
        </strong>
      </v-card-title>
    </v-card>

    <v-card>
      <v-container fill-height>
        <v-text-field 
          label="Quantidade" 
          type="number"
          min="0"
          v-model.number="quantity" 
          :error="insufficientQuantity || !Number.isInteger(quantity)"
        />
        <v-btn
        @click="sellStock" 
          :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
          class="blue darken-3 white--text"
        >
          Vender
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
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },

  methods: {
    sellStock(){
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };

      this.$store.dispatch('portfolio/sellStock', order);
      this.quantity = 0;
    }
  }
}
</script>

<style>

</style>