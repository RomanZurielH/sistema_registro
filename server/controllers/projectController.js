import log from '../config/winston';
// Importando el modelo Project
import ProjectModel from '../models/ProjectModel';

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
const addPost = async (req, res) => {
  const { errorData } = req;
  // crear view models para éste action method
  let project = {};
  let errorModel = {};
  if (errorData) {
    log.error('🧨 Se retorna objeto de error de validación 🧨');
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
    // return res.status(200).json(errorData);
  } else {
    log.info('Se retorna un objeto proyecto válido');
    // Crear un documento con los datos provistos
    // por el formulario y guardar dicho documento
    // en projectModel
    try {
      // Se salva el documento proyecto
      log.info('Se salva objeto Proyecto');
      project = await ProjectModel.save();
    } catch (error) {
      log.error(`Ha fallado el intento de salvar un proyecto:${error.message}`);
      return res.status(500).json({ error });
    }
  }
  // Respondemos con los viewModels generados
  // res.render('projects/addProjectView', { project, errorModel });
  // Sanity check TODO:Provisional
  return res.status(200).json({ project, errorModel });
};

// Exportando el controlador
export default {
  index,
  add,
  addPost,
};
