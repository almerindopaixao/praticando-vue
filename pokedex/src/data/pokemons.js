import { api } from '../services/api';
import { POKEDEX_GET_ALL_API_URL } from '../config/urls';

async function getAllPokemons() {
  try {
    const responseApi = await api.get(POKEDEX_GET_ALL_API_URL);

    if (responseApi.statusText === 'OK') {
      const response = responseApi.data.results;
      return response;
    }

    throw new Error('Não foi possível buscar os pokemons !!');
  } catch (e) {
    return e;
  }
}

async function getOnePokemon(url) {
  try {
    const responseApi = await api.get(url);

    if (responseApi.statusText === 'OK') {
      const response = responseApi.data;
      return response;
    }

    throw new Error('Não foi possível buscar os pokemons !!');
  } catch (e) {
    return e;
  }
}

export { getAllPokemons, getOnePokemon };
