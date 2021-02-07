<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ usuarioLogado }}</p>
		<p>{{ cpf | formatCpf | inverter }}</p>
		<input type="text" :value="cpf | formatCpf">

		<hr>

		<frutas />

		<hr>

		<div>
			<ul>
				<li :key="index" v-for="(fruta, index) in frutas">{{ fruta }}</li>
			</ul>

			<input type="text" v-model="fruta" @keydown.enter="add">
			<button @click="add">Adicionar</button>
		</div>	
	</div>
</template>

<script>
import frutasMixin from './frutaMixin';
import usuarioMixin from './usuarioMixin';
import Frutas from './Frutas';

export default {
	data() {
		return {
			cpf: '66445451212',
		};
	},

	components: { Frutas },

	mixins: [frutasMixin, usuarioMixin],

	filters: {
		formatCpf(value) {
			const regex = /(\d{3})(\d{3})(\d{3})(\d{2})/g;
			const stringFormated = value.replace(regex, '$1.$2.$3-$4');
			return stringFormated;
		},
	},

	created() {
        console.log('created - App.vue');
    },
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

input {
	font-size: 2.5rem;
}
</style>
