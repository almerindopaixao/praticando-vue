const stocksPortfolio = (state, getters, rootState, rootGetters) => {
    return state.stocksPortfolio;
    // return state.stocks.map(stock => {
    //     const record = rootGetters['stocks/stocks'].find(el => el.id === stock.id);
    //     return {
    //         id: stock.id,
    //         quantity: stock.quantity,
    //         name: record.name,
    //         price: record.price,
    //     };
    // });
};

const funds = (state) => state.funds;

export default { stocksPortfolio, funds };
