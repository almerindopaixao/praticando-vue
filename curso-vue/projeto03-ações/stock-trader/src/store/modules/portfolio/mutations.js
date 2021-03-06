const buyStock = (state, payload) => {
    const { stockId, quantity, stockPrice } = payload;
    const record = state.stocks.find(el => el.id === stockId);

    if (record) {
        record.quantity += quantity;
    } else {
        state.stocks.push({
            id: stockId,
            quantity: quantity,
        });
    }

    state.funds -= stockPrice * quantity;
}

const sellStock = (state, payload) => {
    const { stockId, quantity, stockPrice } = payload;
    const record = state.stocks.find(el => el.id === stockId);

    if (record.quantity > quantity) {
        record.quantity -= quantity;
    } else {
        state.stocks.splice(state.stocks.indexOf(record), 1);
    }

    state.funds += stockPrice * quantity;
}

const setPortfolio = (state, payload) => {
    state.funds = payload.funds;
    state.stocksPortfolio = payload.stocksPortfolio ? payload.stocksPortfolio : [];
}

export default { buyStock, sellStock, setPortfolio };