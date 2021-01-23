new Vue({
    el: '#desafio',

    data: {
        valor1: '',
        valor2: '',
    },

    methods: {
        showAlert() {
            alert('Botão Clicado');
        },

        getValue($event) {
            this.valor1 = $event.target.value;
        },

        getValueWithEnter($event) {
            this.valor2 = $event.target.value;
        }
    },
})