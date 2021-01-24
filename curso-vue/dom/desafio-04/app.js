new Vue({
	el: '#desafio',
	data: {
		efeito: '',
		classeInput: '',
		classeDesafio4: '',
		cl4: true,
		estilo: { width: '100px', height: '100px' },
		cor: 'red',
		width: '0%',
	},
	methods: {
		iniciarEfeito() {
			this.efeito = 'destaque';

			setInterval(() => {
				this.efeito = this.efeito === 'destaque' 
					? 'encolher' 
					: 'destaque';
			}, 1000);
		},

		iniciarProgresso() {
			let valor = 0;
			const progresso = setInterval(() => {
				valor += 10;
				this.width = `${valor}%`; 

				if (valor === 100) clearInterval(progresso);
			}, 1000);
		},

		aplicarClasse($event) {
			if ($event.target.value === 'true') {
				this.cl4 = true;
				return;
			}

			if ($event.target.value === 'false') {
				this.cl4 = false;
				return;
			}
		},
	},
})
