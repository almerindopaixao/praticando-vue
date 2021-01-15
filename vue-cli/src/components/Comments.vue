<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <hr>
    <Form @add-todo="addComment" />
    <div class="list-group">
      <p v-if="comments.length <= 0">
        Sem comentários...
      </p>
      <div
        v-for="(comment, index) in allComments"
        :key="index + 1000"
        class="list-group-item"
      >
        <span class="comment__author">
          Author: <strong>{{ comment.name }}</strong>
        </span>
        <p>{{ comment.message }}</p>
        <div>
          <a
            href="#"
            title="Excluir"
            @click.prevent="removeComment(index)"
          >Excluir</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from './Form';

export default {
  name: 'Comments',
  components: {
    Form,
  },

  props: {
    title: {
      type: String,
      default: '',
    }
  },

  data() {
    return {
      comments: [],
    };
  },

  computed: {
    allComments() {
      return this.comments.map((comment) => ({
        ...comment,
        name: comment.name.trim() === '' ? 'Anônimo' : comment.name,
      }));
    },
  },

  watch: {
    comments(val) {
      console.log('oi', val);
    },
  },

  methods: {
    addComment(comment) {
      this.comments.push(comment);
    },

    removeComment(index) {
      this.comments.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.list-group {
  margin-top: 30px;
}
</style>
