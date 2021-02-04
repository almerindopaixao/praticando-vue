<template>
  <div class="input-box">
      <input @keyup.enter="adicionarTarefa" v-model="tarefa" placeholder="Nova Tarefa?" type="text">
      <button @click="adicionarTarefa" type="button">+</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tarefa: '',
        };
    },

    methods: {
        adicionarTarefa() {
            this.$emit('onTarefa', this.tarefa);
            this.tarefa = '';
        },
    },
}
</script>

<style scoped>
.input-box {
    height: 50px;
    width: 30%;

    margin: 30px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid #fff;
    border-radius: 0 10px 10px 0;

    background-color: rgb(104, 104, 104);
}

.input-box button {
    cursor: pointer;
    background-color: rgb(84, 132, 236);
    color: white;
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    height: 100%;

    flex: 1;
    font-size: 24px;
}

.input-box input {
    font-size: 24px;
    color: #fff;
    flex: 12;

    background-color: transparent;

    border: none;
    padding: 0 10px;
}
</style>