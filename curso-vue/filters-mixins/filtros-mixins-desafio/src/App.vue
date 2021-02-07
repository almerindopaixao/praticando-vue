<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>

		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->

		<hr />

		<p>{{ frase | espacosPorVirgula }}</p>
		<input type="text" v-model="frase">
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->

		<hr />

		<p>{{frase2 | contPalavra}}</p>
		<input type="text" v-model="frase2">

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->

		<hr />

		<p>{{ espacosPorVirgulaComputed }}</p>
		<input type="text" v-model="frase3">

		<hr />

		<p>{{ contPalavraComputed }}</p>
		<input type="text" v-model="frase4">

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import AppMixin from './appMixin';

export default {
	data() {
		return {
			frase: '',
			frase2: '',
			frase3: '',
			frase4: '',
		};
	},

	mixins: [AppMixin],

	filters: {
		espacosPorVirgula(value) {
			return value.split(' ').join(', ');
		},
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
</style>
