<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button @click="exibir = !exibir" class="mb-4" variant="primary">Mostrar Mensagem</b-button>

		<!-- <transition appear name="fade">
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>

		<transition appear name="slide" type="animation">
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>

		<transition
			enter-active-class="animated bounce"
			leave-active-class="animated shake"
		>
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition> -->

		<hr>
		<!-- <b-select v-model="tipoAnimacao" class="mb-4">
			<option :value="null">Selecione uma opção</option>
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select> -->

		<!-- <transition :name="tipoAnimacao">
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition> -->
		<!-- <transition :name="tipoAnimacao" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
			<b-alert variant="warning" show v-else key="warning">{{ msg }}</b-alert>
		</transition> -->

		<!-- <hr>
		<button @click="exibir2 = !exibir2">{{ exibir2 ? 'Esconder' : 'Mostrar' }}</button>

		<transition
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"

			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled"
		>
			<div class="caixa" v-if="exibir2"></div>
		</transition> -->

		<!-- <hr>

		<div class="mb-4">
			<b-button
			class="mr-2" 
				@click="componenteSelecionado = 'AlertInfo'" 
				variant="primary">
				Info
			</b-button>

			<b-button 
				@click="componenteSelecionado = 'AlertWarning'" 
				variant="warning">
				Warning
			</b-button>
		</div>

		<transition name="fade" mode="out-in">
			<component :is="componenteSelecionado"></component>
		</transition> -->

		<div class="mb-4">
			<b-form-input v-model="alunoText" class="mb-4" />
			<b-button variant="primary" @click="adicionarAluno">Adicionar Aluno</b-button>
		</div>
		
		<transition-group name="slide" tag="div">
			<b-list-group :key="aluno" v-for="(aluno, index) in alunos">
					<b-list-group-item @click="removerAluno(index)" style="cursor: pointer;">
						{{ aluno }}
					</b-list-group-item>
			</b-list-group>
		</transition-group>


	</div>
</template>

<script>
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import AlertInfo from './AlertInfo';
import AlertWarning from './AlertWarning';

export default {
	data() {
		return {
			alunos: ['Almerindo', 'Roberto', 'Pedro', 'Paulo'],
			alunoText: '',
			msg: 'Uma mensagem de informação para usuário',
			exibir: false,
			exibir2: true,
			tipoAnimacao: 'fade',
			larguraBase: 0,
			componenteSelecionado: 'AlertInfo',
		};
	},

	// components: { AlertInfo, AlertWarning },

	methods: {
		adicionarAluno() {
			this.alunoText && this.alunos.push(this.alunoText);
			this.alunoText = '';
		},

		removerAluno(indice) {
			this.alunos.splice(indice, 1);
		},

		animar(el, done, negativo) {
			let rodada = 1;
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase + 
					(negativo ? -rodada * 10: rodada * 10);
				el.style.width = `${novaLargura}px`;
				rodada++

				if (rodada > 30) {
					clearInterval(temporizador);
					done();
				}
			}, 20);
		},
		beforeEnter(el) {
			this.larguraBase = 0;
			el.style.width = `${this.larguraBase}px`;
		},

		enter(el, done) {
			this.animar(el, done, false);
		},

		afterEnter(el) {
			console.log('afterEnter');
		},

		enterCancelled() {
			console.log('EnterCancelled');
		},

		beforeLeave(el) {
			this.larguraBase = 300;
			el.style.width = `${this.larguraBase}px`;
		},

		leave(el, done) {
			this.animar(el, done, true);
		},

		afterLeave(el) {
			console.log('afterLeave');
		},

		leaveCancelled() {
			console.log('leaveCancelled');
		},
	}
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
	font-size: 1.5rem;
}

.caixa {
	width: 300px;
	height: 150px;
	background-color: lawngreen;
	margin: 30px auto;
}

.fade-enter, 
.fade-leave-to {
	opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 2s;
}

@keyframes slide-in {
	from {
		transform: translateY(40px);
	}

	to {
		transform: translateY(0);
	}
}

@keyframes slide-out {
	from {
		transform: translateY(0);
	}

	to {
		transform: translateY(40px);
	}
}

.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.slide-leave-active {
	position: absolute;
	width: 100%;
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter, 
.slide-leave-to {
	opacity: 0;
}

.slide-move {
	transition: transform 1s;
}

</style>
