<template>
  <div class="progress-bar-container">
      <div :style="{width: `${tarefasConcluidas}%`}" class="progress-bar">
          <span>{{ tarefasConcluidas }}%</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ProgressBar',

    props: {
        concluidas: Number,
        numeroDeTarefas: Number,
    },

    computed: {
        tarefasConcluidas() {
            const pct = ((this.concluidas * 100) / this.numeroDeTarefas) || 0;
            return pct;
        },
    }
}
</script>

<style scoped>
.progress-bar-container {
    border: 1px solid #fff;

    width: 80%;
    height: 35px;

    margin: 20px 0;
}

.progress-bar {
    font-size: 24px;

    height: 100%;
    background-color: rgb(51, 145, 51);
}

</style>