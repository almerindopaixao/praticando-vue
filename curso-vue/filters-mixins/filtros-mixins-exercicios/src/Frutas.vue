<template>
    <div>
        <h1>{{ global }}</h1>

        <ul>
            <li :key="index" v-for="(fruta, index) in frutas">{{ fruta }}</li>
        </ul>

        <input type="text" v-model="fruta" @keydown.enter="add">
        <button @click="add">Adicionar</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fruta: '',
            frutas: ['banana', 'maça', 'laranja'],
        };
    },

    methods: {
        add() {
            this.frutas.push(this.fruta);
            this.fruta = '';
        }
    }
}
</script>

<style>

</style>