import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contPalavra', (value) => {
	const palavras = value.split(' ');

	let cont;

	const newPalavras = palavras.map((palavra) => {
		cont = palavra.length;
		if (!cont) return;
		return `${palavra} (${cont})`;
	});


	return newPalavras.join(' ');
});

new Vue({
	render: h => h(App),
}).$mount('#app');
