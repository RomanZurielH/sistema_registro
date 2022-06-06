// Importando el enrutador de Home
import homeRouter from './homeRouter';
// Importando el enrutador de Project
import projectRouter from './projectRouter';

// Funcion que agrega todos los enrutadores
// a la aplicación de express
const addRoutes = (app) => {
  /* Agregando enrutador a Home */
  app.use('/', homeRouter);
  /* Agregando al enrutador Project */
  app.use('/projects', projectRouter);
};

export default {
  addRoutes,
};
