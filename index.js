// Importanción de Módulo para servicios http
const http = require('http');
// Importación de modulo para agregar color en los logs
const colors = require('colors');
// Numero del puerto del servidor
const port = 3000;

// Manejador del servidor (request/response)
const handlerServer = (req, res) => {
    // Codigo de respuesta y tipo de contenido
    res.writeHead(200, { 'Content-type': 'text/html' });
    // Lo que se vera en el servidor
    res.write('<h1>Hola Mundo</h1>');
    // Finalizar la respuesta
    res.end();
}

// Creamos el servidor y enviamos como parametro el manejador del servidor
const server = http.createServer(handlerServer);

// Le decimos al servidor que va a escuchar por este puerto
server.listen(port, () => {
    console.log('Server on port'.green, port);
});