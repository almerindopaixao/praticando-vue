<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TaskProgress :progress="progress" />
		<NewTask @taskAdded="addTask" />
		<TaskGrid 
			@taskStateChanged="toggleTaskState"
			@taskDeleted="deleteTask"
			:tasks="tasks" />
	</div>
</template>

<script>
import TaskProgress from '@/components/TaskProgess';
import TaskGrid from '@/components/TaskGrid';
import NewTask from '@/components/NewTask';

export default {
	components: { TaskGrid, NewTask, TaskProgress },

	data() {
		return {
			tasks: [],
		};
	},

	computed: {
		progress() {
			const total = this.tasks.length;
			const done = this.tasks.filter(t => !t.pending).length;

			return Math.round(done / total * 100) || 0;
		},
	},

	watch: {
		tasks: {
			deep: true,
			handler() {
				const json = JSON.stringify(this.tasks);
				localStorage.setItem('tasks', json);
			},
		},
	},

	created() {
		const data = localStorage.getItem('tasks');
		const tasks = JSON.parse(data);
		this.tasks = tasks;
	},

	methods: {
		addTask(task) {
			const sameName = t => t.name === task.name;
			const reallyNew = this.tasks.filter(sameName).length == 0;

			if (reallyNew && task.name) {
				this.tasks.push({
					name: task.name,
					pending: task.pending || true,
				});
			}
		},

		deleteTask(task) {
			const index = this.tasks.indexOf(task);
			if (index >= 0) this.tasks.splice(index, 1);
		},

		toggleTaskState(i) {
			this.tasks[i].pending = !this.tasks[i].pending
		},
	},
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
