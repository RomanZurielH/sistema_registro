// Importando el enrutador de home
import homeRouter from './homeRoutes';

// Funcion que agrega todos los enrutadores a aplicacion de express
// a la aplicacion de express
const addRoutes = (app) => {
  /* Agergando enrutador a home */
  app.use('/', homeRouter);
};

export default {
  addRoutes,
};
