<template>
	<div id="app">
		<h1>Tarefas</h1>
		<ProgressBar :concluidas="tarefasConcluidas" :numeroDeTarefas="tarefas.length" />
		<Input @onTarefa="adicionarTarefa($event)" />
		<TodoContainer>
			<TodoCard @clTarefa="tarefasConcluidas += $event" @rmTarefa="removerTarefa($event)" :index="index" v-for="(tarefa, index) in tarefas" :key="index" >
				{{ tarefa }}
			</TodoCard>
		</TodoContainer>
	</div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar';
import Input from '@/components/Input';
import TodoContainer from '@/components/TodoContainer';
import TodoCard from '@/components/TodoCard';

export default {
	components: { ProgressBar, Input, TodoContainer, TodoCard },

	data() {
		return {
			tarefas: [],
			tarefasConcluidas: 0,
		};
	},

	methods: {
		adicionarTarefa(tarefa) {
			const encontrou = !!this.tarefas.find(value => value === tarefa);

			if (encontrou || !tarefa) return;
			
			this.tarefas.push(tarefa);
		},

		removerTarefa(index) {
			this.tarefas.splice(index, 1);
		},
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
