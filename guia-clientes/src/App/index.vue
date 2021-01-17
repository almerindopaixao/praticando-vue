<template>
  <div id="app">
    <form class="formErro" @submit="handleSubmit($event)">
      <h3>Cadastro</h3>
      <input type="text" placeholder="name" v-model="nameField" />
      <small v-show="hasError" id="erro"
        >O nome é inválido, tente novamente</small
      >
      <input type="email" placeholder="email" v-model="emailField" />
      <small v-show="hasError" id="erro"
        >O e-mail é inválido, tente novamente</small
      >
      <input type="number" placeholder="idade" v-model="ageField" />
      <small v-show="hasError" id="erro"
        >A idade é inválido, tente novamente</small
      >
      <button type="submit">Cadastrar</button>
      <button type="button" @click="handleShowData">
        {{ showData ? 'Ocultar Dados' : 'Mostrar Dados' }}
      </button>
    </form>
    <hr />
    <div
      v-show="showData"
      :key="index"
      v-for="(cliente, index) in orderClientes"
    >
      <Cliente :client="cliente" showAge @remove="removeClient($event)" />

      <div class="edit">
        <h4>Edição:</h4>

        <input type="text" v-model="cliente.name" />
        <input type="email" v-model="cliente.email" />
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

import Cliente from '../components/Cliente';

export default {
  name: 'App',

  data() {
    return {
      nameField: '',
      emailField: '',
      ageField: 0,
      clientes: [
        { id: 54, name: 'Angélica', email: 'angelica@gmail.com', age: 21 },
      ],
      hasError: false,
      showData: false,
    };
  },

  methods: {
    handleSubmit($event) {
      $event.preventDefault();

      this.hasError = false;

      if (
        this.nameField.trim() === '' ||
        this.emailField.trim() === '' ||
        this.ageField < 3
      ) {
        this.hasError = true;
        return;
      }

      this.clientes.push({
        name: this.nameField,
        email: this.emailField,
        age: this.ageField,
      });

      this.nameField = '';
      this.emailField = '';
      this.ageField = 0;
    },

    removeClient($event) {
      const id = $event.idDoCliente;
      this.clientes = this.clientes.filter(client => client.id != id);
    },

    handleShowData() {
      this.showData = !this.showData;
    },
  },

  components: {
    Cliente,
  },

  computed: {
    orderClientes() {
      return _.orderBy(this.clientes, ['name'], ['asc']);
    },
  },
};
</script>

<style>
* {
  --color-dark: black;
  --color-text: blue;
  --color-background: #ece5e3;

  --sizing-small: 10px;
  --sizing-large: 20px;
  --container-width: 600px;
  --container-height: 120px;
}

.edit {
  margin: 20px auto;
  max-width: var(--container-width);
  background-color: var(--color-background);

  padding: var(--sizing-small);
  border-radius: var(--sizing-small);
}

input {
  display: block;
}

input + input {
  margin-top: 10px;
}

hr {
  border-top: 0;
  border-bottom: 0.5px solid #ddd;
}

button {
  cursor: pointer;
}

form {
  background-color: var(--color-background);
  padding: var(--sizing-small);
  border-radius: var(--sizing-small);
}

form button {
  margin-top: var(--sizing-large);
}

form button + button {
  margin-left: 10px;
}

#erro {
  color: red;
  font-size: 11px;
  display: block;
  margin-bottom: 10px;
  margin-top: 2.5px;
}
</style>
