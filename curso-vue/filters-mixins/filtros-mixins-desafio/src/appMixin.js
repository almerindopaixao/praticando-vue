export default {
    computed: {
		espacosPorVirgulaComputed() {
			return this.frase3.split(' ').join(', ');
		},

		contPalavraComputed() {
			const palavras = this.frase4.split(' ');

			let cont;

			const newPalavras = palavras.map((palavra) => {
				cont = palavra.length;
				if (!cont) return;
				return `${palavra} (${cont})`;
			});


			return newPalavras.join(' ');
		}
	},
};
