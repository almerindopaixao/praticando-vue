<template>
	<div id="app">
		<h1>Registrar Reclamação</h1>
		<div class="conteudo">
			<form @submit.prevent="enviar" class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<Rotulo nome="E-mail">
					<input v-model="usuario.email" type="text">
				</Rotulo>
				<Rotulo nome="Senha">
					<input v-model="usuario.senha" type="password">
				</Rotulo>
				<Rotulo nome="Idade">
					<input v-model="usuario.idade" type="number">
				</Rotulo>
				<Rotulo nome="Mensagem">
					<textarea v-model="mensagem" name="" cols="30" rows="5">Tipo</textarea>
				</Rotulo>
				<Rotulo nome="Características do Problema">
					<span class="mr-4"><input type="checkbox" v-model="caracteristicas" value="reproduzivel"> Reproduzível</span>
					<span><input type="checkbox" v-model="caracteristicas" value="intermitente"> Intermitente</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span class="mr-4"><input v-model="produto" type="radio" value="web"> Web</span>
					<span class="mr-4"><input v-model="produto" type="radio" value="mobile"> Mobile</span>
					<span><input v-model="produto" type="radio" value="outro"> Outro</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<select v-model="prioridade">
						<option :key="p.codigo" v-for="p in prioridades"
							:value="p.codigo"
							:selected="p.codigo === 2"
						>
							{{ p.nome }}
						</option>
					</select>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<Escolha v-model="escolha" />
				</Rotulo>
				<hr>
				<button>Enviar</button>
			</form>
			<div class="painel" v-else> 
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="E-mail">
					<span>{{ usuario.email || '???' }}</span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span>{{ usuario.senha || '???' }}</span>
				</Rotulo>
				<Rotulo nome="Idade">
					<span>{{ usuario.idade || '???' }}</span>
				</Rotulo>
				<Rotulo nome="Mensagem">
					<span style="white-space: pre;">{{ mensagem || '???' }}</span>
				</Rotulo>
				<Rotulo nome="Marque as Opções">
					<span>
						<ul v-if="caracteristicas.length">
							<li :key="c" v-for="c in caracteristicas">{{ c }}</li>
						</ul>
						<template v-else>???</template>
					</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span>{{ produto || '???' }}</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<span>{{ prioridade }}</span>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<span>{{ escolha }}</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import Escolha from './components/Escolha.vue'

export default {
	name: 'app',
	components: { Rotulo, Escolha },

	data() {
		return { 
			mensagem: '',
			caracteristicas: [],
			produto: 'web',
			prioridade: 1,
			prioridades: [
				{ codigo: 1, nome: 'Baixa' },
				{ codigo: 2, nome: 'Moderada' },
				{ codigo: 3, nome: 'Alta' },
			],
			usuario: {
				email: '',
				senha: '',
				idade: 0,
			},

			escolha: true,
			enviado: false,
		
		};
	},

	methods: {
		enviar() {
			this.enviado = true;
		},
	},
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
