const express = require('express');
const colors = require('colors');

const port = 3000;

const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Hola Mundo con Express y NodeJS</h1>');
    res.end();
});

server.listen(port, () => {
    console.log('Server on port'.green, port);
});