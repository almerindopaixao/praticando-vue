<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <hr>
    <Form v-on:add-todo="addComment" />
    <div class="list-group">
      <p v-if="comments.length <= 0" >Sem comentários...</p>
      <div class="list-group-item" v-for="(comment, index) in allComments" v-bind:key="index + 1000">
        <span class="comment__author">
          Author: <strong>{{ comment.name }}</strong>
        </span>
        <p>{{ comment.message }}</p>
        <div>
          <a v-on:click.prevent="removeComment(index)" href="#" title="Excluir">Excluir</a>
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
      title: String,
    },

    data() {
      return {
        comments: [],
      }
    },

    methods: {
      addComment(comment) {
        this.comments.push(comment);
      },

      removeComment(index) {
        this.comments.splice(index, 1);
      },
    },

    computed: {
      allComments() {
        return this.comments.map((comment) => ({
          ...comment,
          name: comment.name.trim() === '' ? 'Anônimo' : comment.name,
        }));
      }
    },

    watch: {
      comments(val) {
        console.log('oi', val);
      }
    }
  }
</script>

<style scoped>

  .list-group {
    margin-top: 30px;
  }

</style>
