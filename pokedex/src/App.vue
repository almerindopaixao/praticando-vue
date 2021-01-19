<template>
  <main>
    <div v-for="(pokemon, index) in pokemons" :key="index">
      <PokemonCard :name="pokemon.name" :url="pokemon.url" :num="index + 1" />
    </div>
  </main>
</template>

<script>
import PokemonCard from './components/PokemonCard';
import { getAllPokemons } from './data/pokemons';

export default {
  name: 'App',

  components: {
    PokemonCard,
  },

  data() {
    return {
      pokemons: [],
    };
  },

  created() {
    getAllPokemons()
      .then(res => (this.pokemons = res))
      .catch(err => console.log(err));
  },
};
</script>

<style lang="scss">
$font-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

$primary-color: #ef5350;
$secondary-color: #263238;
$button-color: #127ded;
$background-color: #ebf5f0;

$size-small: 1.2rem;
$size-medium: 1.6rem;
$size-large: 2rem;
$size-superLarge: 2.5rem;
$size-extraLarge: 3rem;

$BREAKPOINT-DESK: 'only screen and (max-width: 1280px)';
$BREAKPOINT-TABLET-LAND: 'only screen and (max-width: 975px)';
$BREAKPOINT-TABLET: 'only screen and (max-width: 600px)';
$BREAKPOINT-MOBILE-LAND: 'only screen and (max-width: 480px)';

@mixin reset-css {
  margin: 0;
  outline: none;
  padding: 0;
  box-sizing: border-box;
}

* {
  @include reset-css;
}

main {
  padding: 20px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: $background-color;
}
</style>
