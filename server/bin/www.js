#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from "@s/app";
import Debug from "debug";
import http from "http";
 
 // Creando instancia del debugger
 const debug = Debug("proyeto-final-p2:server");
 
 /**
  * Get port from environment and store in Express.
  */
 
 const port = normalizePort(process.env.PORT || "3000");
 // app es una instnacia de ExpressJs[ ] [ NODE ]
 app.set("port", port);
 
 /**
  * Create HTTP server.
  */
 
 const server = http.createServer(app); // (req, res, next, err)=> {}
 
 /**
  * Listen on provided port, on all network interfaces.
  */
 
 server.listen(port); // Pone al server a escuchar
 // Se registran eventos
 server.on("error", onError); // En caso de error
 server.on("listening", onListening); // Cuando esta escuchando
 
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
   if (error.syscall !== "listen") {
     throw error;
   }
 
   var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
 
   // handle specific listen errors with friendly messages
   switch (error.code) {
     case "EACCES":
       console.error(`${bind} requires elevated privileges`);
       process.exit(1);
       break;
     case "EADDRINUSE":
       console.error(`${bind} is already in use`);
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
    const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
    console.log(`✍ Servidor escuchando 🤖🦻...en ${app.get("port")}`);
  }