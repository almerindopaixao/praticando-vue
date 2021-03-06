<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Stock</span>
      <span class="font-weight-light">
        Trader
      </span>
    </v-toolbar-title>

    <!-- <v-spacer></v-spacekr> -->

    <v-toolbar-items>
      <v-btn flat to="/">Ínicio</v-btn>
      <v-btn flat to="/portfolio">Portfólio</v-btn>
      <v-btn flat to="/stocks">Ações</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat @click="endDay">Finalizar Dia</v-btn>

      <v-menu offset-y>
        <v-btn flat slot="activator">
          Savar & Carregar
        </v-btn>
        <v-list>
          <v-list-tile @click="saveData">
            <v-list-tile-title>
              Salvar Dados
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>
              Carregar Dados
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-layout align-center>
        <span class="text-uppercase grey--text text--darken-2">
          Saldo: {{ funds | currency }}
        </span>
      </v-layout>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('portfolio', ['funds', 'stocksPortfolio']),
    ...mapGetters('stocks', ['stocks']),

    funds() {
      return this.$store.getters['portfolio/funds'];
    },
  },

  methods: {
    ...mapActions('stocks', ['randomizeStocks']),

    endDay() {
      this.randomizeStocks();
    },

    async saveData() {
      try {
        await this.$http.put('', { 
        stocks: this.stocks,
        funds: this.funds,
        stocksPortfolio: this.stocksPortfolio,
       });
      } catch (err) {
         if (err.isAxiosError) {
            if (err.response === undefined) {
                console.error('Error de conexão: Não foi possivel realizar uma connexão com a api');
            } else if (err.response.status === 404) {
                console.error('Error 404: Você fez uma requisição para uma rota que não existe');
            } else {
                console.log(err);
            }
        } else {
            console.log(err);
        }
      }
      
    },
  },
}
</script>

<style>

</style>