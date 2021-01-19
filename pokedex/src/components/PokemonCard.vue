<template>
  <div class="pokemon">
    <div class="card">
      <div class="card-image">
        <figure>
          <img :src="currentImg" :alt="name + 'image'" />
        </figure>
      </div>

      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ num }} - {{ name | upperCaseFirst }}</p>
            <p class="subtitle is-6">{{ pokemon.type }}</p>
          </div>
        </div>

        <div class="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getOnePokemon } from '../data/pokemons';

export default {
  name: 'PokemonCard',

  props: {
    num: Number,
    name: String,
    url: String,
  },

  created() {
    getOnePokemon(this.url)
      .then(res => {
        this.pokemon.type = res.types[0].type.name;
        this.pokemon.front = res.sprites.front_default;
        this.pokemon.back = res.sprites.back_default;

        this.currentImg = this.pokemon.front;
      })
      .catch(err => console.log(err));
  },

  data() {
    return {
      isFront: true,
      currentImg: '',

      pokemon: {
        type: '',
        front: '',
        back: '',
      },
    };
  },

  filters: {
    upperCaseFirst(value) {
      const newValue = value.charAt(0).toUpperCase() + value.slice(1);
      return newValue;
    },
  },
};
</script>

<style scoped lang="scss">
.pokemon {
  margin-bottom: 20px;

  background: white;
}

.card {
  width: 600px;
  padding: 10px 0 30px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  box-shadow: 1px 1px 1px rgba($color: #000000, $alpha: 0.1),
    2px 2px 2px rgba($color: #000000, $alpha: 0.1),
    3px 3px 3px rgba($color: #000000, $alpha: 0.1),
    0.5px 0.5px 0.5px inset rgba($color: #000000, $alpha: 0.1);
}

.media-content {
  p {
    text-align: center;
  }
}

.title {
  font-weight: 600;
}

.subtitle {
  color: rgb(192, 179, 179);
}
</style>
