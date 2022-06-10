import log from '../config/winston';

/* Actions Methods */

// Lista los proyectos
// GET /projects | GET /projects/index
const index = (req, res) => {
  res.send('Lista de proyectos 🚧');
  // TODO: Agregar codigo de listado de proyectos
};

// Agrega ideas de proyectos
// GET /projects/add
const add = (req, res) => {
  res.render('projects/addProjectView', {});
  // TODO: Agregar codigo para agregar proyectos
};

// Procesa el formulario que Agrega ideas de proyectos
// POST /projects/add
const addPost = (req, res) => {
  const { errorData } = req;
  // crear view models para éste action method
  let project = {};
  let errorModel = {};
  if (errorData) {
    log.info('Se retorna objeto de error de validacion');
    // Rescatando el objeto válidado
    project = errorData.value;
    // Usamos reduce para generar un objeto
    // de errores a paritr de inner
    errorModel = errorData.inner.reduce((prev, curr) => {
      // Creamos una variable temporal para evitar
      // el error "no-param-reasssign" el cual me
      // exhorta a evitar reasignar los valores de
      // los argumentos de una función
      const newVal = prev;
      newVal[`${curr.path}Error`] = curr.message;
      return newVal;
    }, {});
    // La validacion falló
    // res.status(200).json(errorData);
  } else {
    log.info('Se retorna objeto proyecto válido');
    // Desestructurando la información
    // del formulario del objeto válido
    const { validData } = req;
    // Regresar un objeto con los datos
    // obtenidos del formulario
    // res.status(200).json(validData);
    project = validData;
  }
  // Respondemos con los viewModels generados
  res.render('projects/addProjectView', { project, errorModel });
  // res.status(200).json({ project, errorModel });
};

// Exportando el controlador
export default {
  index,
  add,
  addPost,
};
