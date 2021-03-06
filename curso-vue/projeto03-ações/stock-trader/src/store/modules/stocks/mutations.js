const setStocks = (state, payload) => {
    state.stocks = payload;
}

const randomizeStocks = (state) => {
    state.stocks.forEach(stock => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.45));
    });
} 

export default { setStocks, randomizeStocks };