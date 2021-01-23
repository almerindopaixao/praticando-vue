new Vue({
    el: '#desafio',

    data() {
        return {
            name: 'Almerindo',
            age: 19,
            image: 'https://miro.medium.com/max/900/1*OrjCKmou1jT4It5so5gvOA.jpeg',
        };
    },

    methods: {
        generateNumber() {
            return Math.random().toFixed(2);
        },
    },
});
