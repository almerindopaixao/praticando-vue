<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens" :key="mensagem.texto" :variant="mensagem.tipo">{{ mensagem.texto }}</b-alert>
		<b-form @submit.prevent="salvar">
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg" v-model="produto.nome" placeholder="Informe o nome do produto"></b-form-input>
			</b-form-group>

			<b-form-group label="Descrição:">
				<b-form-textarea size="lg" v-model="produto.descricao" placeholder="Informe a descricao"></b-form-textarea>
			</b-form-group>

			<b-form-group label="Preço:">
				<b-form-input size="lg" v-model.number="produto.preco" placeholder="Informe o preço do produto"></b-form-input>
			</b-form-group>

			<b-form-group label="Categoria:">
				<b-form-select v-model="produto.categoria_id" :options="categorias" size="lg">
				</b-form-select>
			</b-form-group>
			<hr>
			<b-button size="lg" variant="primary" type="submit">{{ !id ? 'Salvar' : 'Alterar' }}</b-button>
			<b-button @click="obterProdutos" size="lg" variant="success" type="button" class="ml-2">Obter Usuários</b-button>
		</b-form>

		<hr>

		<b-list-group>
			<b-list-group-item :key="produto.id" v-for="(produto, index) in produtos">
				<strong>Nome: </strong> {{ produto.nome }} <br>
				<strong>Descricao: </strong> {{ produto.descricao }} <br>
				<strong>Preco: </strong> {{ produto.preco }} <br>
				<strong>Categoria: </strong> {{ categoriasList[produto.categoria_id] }} <br>
				<strong>Id: </strong> {{ produto.id }} <br>

				<b-button class="mt-4" size="lg" variant="warning" @click="carregar(produto.id)">Carregar</b-button>
				<b-button class="ml-2 mt-4" size="lg" variant="danger" @click="excluir(produto.id, index)">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {

	data() {
		return {
			mensagens: [],
			produtos: [],
			id: null,
			produto: {
				nome: '',
				descricao: '',
				preco: '',
				categoria_id: null, 
			},

			categorias: [
				{value: null, text: 'Selecione uma categoria..', disabled: true}
			],

			categoriasList: ['', 'Hambúrgures', 'refrigerante'],
		};
	},
	/* eslint-disable no-console */
	created() {
		this.$http.get('categorias')
			.then((res) => {
				return res.data;
			})
			.then((data) => {
				data.forEach((categoria) => {
					this.categorias.push({
						value: categoria.id,
						text: categoria.nome,
					});
				});
			})
			.catch((err) => console.log(err));
	},
	methods: {
		async salvar() {
			try {
				const metodo = this.id ? 'put' : 'post';
				const finalUrl = this.id ? `/${this.id}` : '';

				await this.$http[metodo](`produtos${finalUrl}`, this.produto);
				this.limparDados();
				this.mensagens.push({
					texto: 'Operação realizada com sucesso !!',
					tipo: 'success',
				});
				this.obterProdutos();
			} catch (e) {
				console.log(e);
			}
		},

		limparDados() {
			this.produto.nome = '';
			this.produto.descricao = '';
			this.produto.preco = '';
			this.produto.categoria_id = null;
			this.id = null;
			this.mensagens = [];
		},

		async obterProdutos() {
			try {
				const res = await this.$http('produtos');
				this.produtos = res.data;
			} catch (e) {
				console.log(e);
			}
		},

		carregar(id) {
			this.id = id;

			const produto = this.produtos.find((produt) => produt.id === id);
			this.produto = { ...produto };
		},

		async excluir(id, i) {
			try {
				await this.$http.delete(`produtos/${id}`);
				this.produtos.splice(i, 1);
				this.limparDados();
			} catch(e) {
				this.mensagens.push({
					texto: 'Problema para excluir',
					tipo: 'danger',
				});
			}
		},
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
