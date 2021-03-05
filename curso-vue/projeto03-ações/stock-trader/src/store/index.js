import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

Vue.use(Vuex);

export default new Store({
    modules: { stocks, portfolio },
});
