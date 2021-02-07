import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', (value) => {
	return value.split('').reverse().join('');
});

Vue.mixin({
	data() {
		return {
			global: 'Mixin Global',
		};
	},

	created() {
		console.log('Created - Mixin Global');
	},
});

new Vue({
	render: h => h(App),

	created() {
		console.log('Created - Vue instance');
	},
}).$mount('#app')
