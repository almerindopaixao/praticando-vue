/* eslint-disable no-console */
import api from '../../../services/api';

const buyStock = ({ commit }, order) => {
    commit('portfolio/buyStock', order, { root: true });
}

const initStocks =  async ({ commit }) => {
    try {
        const result = await api.get('');
        commit('setStocks', result.data);
    } catch (err) {
        if (err.isAxiosError) {
            if (err.response === undefined) {
                console.error('Error de conexão: Não foi possivel realizar uma connexão com a api');
            } else if (err.response.status === 404) {
                console.error('Error 404: Você fez uma requisição para uma rota que não existe');
            } else {
                console.log(err);
            }
        } else {
            console.log(err);
        }
    }
}

export default { buyStock, initStocks };