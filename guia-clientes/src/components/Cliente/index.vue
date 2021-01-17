<template>
  <div :class="{ client: !isPremium, 'client-premium': isPremium }">
    <h4>Nome: {{ client.name }}</h4>
    <p>Email: {{ client.email | processEmail }}</p>
    <p v-if="showAge">Idade: {{ client.age }}</p>
    <p v-else>O usuário escondeu a idade</p>
    <button @click="toggleButton">Mudar cor!</button>
    <button @click="emitRemoveButton">Excluir Usuário</button>
    <h4>Id Especial: {{ idExpection }}</h4>
  </div>
</template>

<script>
export default {
  name: 'Cliente',
  props: {
    client: Object,
    showAge: Boolean,
  },

  data() {
    return {
      isPremium: false,
    };
  },

  methods: {
    toggleButton() {
      this.isPremium = !this.isPremium;
    },

    emitRemoveButton() {
      this.$emit('remove', { idDoCliente: this.client.id });
    },
  },

  filters: {
    processEmail(value) {
      return value.toUpperCase();
    },
  },

  computed: {
    idExpection() {
      return (
        this.client.email +
        this.client.name +
        this.client.id +
        new Date().getMilliseconds()
      ).toUpperCase();
    },
  },
};
</script>

<style scoped>
.client {
  margin-top: var(--sizing-small);
  background-color: var(--color-background);
  max-width: var(--container-width);
  padding: var(--sizing-small);
  margin: 20px auto;

  border-radius: var(--sizing-small);
}

.description {
  border: 1px solid rgb(194, 187, 187);
  padding: var(--sizing-small) var(--sizing-small);
  margin: 0 var(--sizing-small);
}

.client-premium {
  margin-top: var(--sizing-small);
  background-color: red;
  max-width: var(--container-width);
  padding: var(--sizing-small);
  margin: 20px auto;

  border-radius: var(--sizing-small);
}

button + button {
  margin-left: var(--sizing-small);
}
</style>
