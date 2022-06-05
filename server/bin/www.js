#!/usr/bin/env node

/**
 * Module dependencies.
 */
// var app = require('../app');
import app from '@s/app';
// var debug = require('debug')('projnotes:server');
import Debug from 'debug';
import http from 'http';
// Creando instancia del debugger
const debug = Debug('projnotes:server');
/**
 * Get port from environment and store in Express.
 */
/** process.env.PORT Forma de acceder a la variable de entorno */
const port = normalizePort(process.env.PORT || '3000');
// app es una instancia de ExpressJs[ ] [ NODE ]
app.set('port', port);
/**
 * Create HTTP server.
 */
const server = http.createServer(app); // (req, res, next, err) => {}
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port); // Pone al server a escuchar
// Se registran eventos
server.on('error', onError);
server.on('listening', onListening);
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind}  is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on  ${bind}`);
  console.log(`✍Servidor escuchando... en 👂 ${app.get('port')}`);
}
