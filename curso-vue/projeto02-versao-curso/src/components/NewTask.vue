<template>
  <div class="new-task">
      <input class="form-element" @keyup.enter="add" 
            v-model="name" type="text" placeholder="Nova tarefa?">
      <button class="form-element" @click="add">+</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
        };
    },

    methods: {
        add() {
            this.$emit('taskAdded', { name: this.name });
            this.name = '';
        }
    }
}
</script>

<style>
.new-task {
    margin: 35px;
}

.form-element {
    outline: none;
    font-size: 2rem;
    border: 1px solid #FFF;
    padding: 5px 10px 8px;
    color: #FFF;
}

input.form-element {
    width: 500px;
    background: #FFF2;
    border-radius: 8px 0px 0px 8px;
}

button.form-element {
    border-left: none;
    background-color: #2196F3;
    border-radius: 0px 8px 8px 0px;

    cursor: pointer;
}
</style>