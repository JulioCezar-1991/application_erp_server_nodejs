'use strict'

const app = require('../src/app');
const debug = require('debug')('nodestr:server');
const http = require('http');


const port = normalizePort(process.env.Port || '2212');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListning);
console.log('API rodando na porta ' + port);

function normalizePort(val) { //Função para validação da porta
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port => 0) {
        return port;
    }
    return false;
}


function onError(error) { // Função para tratamento de erro
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
    'Pipe' + port :
    'Port' + port;

    switch (error.code){
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE' :
            console.error(bind + 'is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

function onListning(){
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on' + bind);
}