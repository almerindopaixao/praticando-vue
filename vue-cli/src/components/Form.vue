<template>
  <div class="form-todo form-group">
    <p>
      <input
        v-model="name"
        placeholder="Nome"
        type="text"
        name="author"
        class="form-control"
      >
    </p>
    <p>
      <textarea
        v-model="message"
        placeholder="Comentário"
        name="message"
        class="form-control"
      />
    </p>
    <button
      type="submit"
      class="btn btn-primary"
      @click="addComment"
    >
      Comentar
    </button>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      name: '',
      message: '',
    };
  },

  methods: {
    addComment() {
      if (this.message.trim() === '') return;

      this.$emit('add-todo', {
        name: this.name,
        message: this.message,
      });

      this.name = '';
      this.message = '';
    },
  },
};
</script>
