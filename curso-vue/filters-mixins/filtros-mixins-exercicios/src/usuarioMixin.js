const usuarioMixin = {
    computed: {
        usuarioLogado() {
            return 'Marina Silva';
        },
    },

    created() {
        console.log('created - Usuario Mixin');
    },
};

export default usuarioMixin;