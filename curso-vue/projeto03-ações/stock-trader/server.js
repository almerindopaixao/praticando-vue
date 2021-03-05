/* eslint-disable no-console */
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'src', 'data', 'stocks.json'));
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);

server.use(middlewares);
server.use(router);

server.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
    console.log('http://localhost:5000');
});

