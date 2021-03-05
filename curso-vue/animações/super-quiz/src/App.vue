<template>
	<div id="app">
		<h1>Super Quiz</h1>

		<transition 
			mode="out-in"
			leave-active-class="flip-leave-active"  enter-active-class="flip-enter-active" 
		>
			<component 
				@answerSelected="answerSelect"
				@nextAnswer="next"
				:question="questions[questionCurrent]" 
				:result="answerCorrect"
				:is="componentCurrent"
			>
			</component>
		</transition>
		
	</div>
</template>

<script>
import Question from './components/Question';
import Result from './components/Result';7
import questions from './util/questions';

export default {
	components: { Question, Result },

	data() {
		return {
			componentCurrent: 'question',
			questionCurrent: 0,
			questions,
			answerCorrect: false,
		};
	},

	methods: {
		next() {
			let r = parseInt(Math.random() * this.questions.length);
			
			this.questionCurrent = r;
			this.componentCurrent = 'question';
		},

		answerSelect(correct) {
			this.answerCorrect = correct;
			this.componentCurrent = 'result'
		},
	},
}
</script>

<style>
body {
	background: linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224));
	font-family: 'Oswald', sans-serif;
	color: #FFF;
	height: 100vh;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
}

#app h1 {
	font-weight: 200;
	font-size: 4rem;
}

@keyframes flip-out {
	0% { transform: rotateY(0deg); }
	50% { transform: rotateY(45deg); }
	100% { transform: rotateY(90deg); }
}

@keyframes flip-in {
	0% { transform: rotateY(90deg); }
	50% { transform: rotateY(135deg); }
	100% { transform: rotateY(180deg); }
}

.flip-enter-active {
	animation: flip-in 0.3s ease;
}

.flip-leave-active {
	animation: flip-out 0.3s ease;
}
</style>
