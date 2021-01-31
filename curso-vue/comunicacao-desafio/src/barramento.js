import Vue from 'vue';

export default new Vue({
    methods: {
        selecionarUsuario(payload) {
            this.$emit('user', payload);
        },

        usuarioSelecionado(callback) {
            this.$on('user', callback);
        },
    },
});