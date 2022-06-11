import log from '../config/winston';
// Importando el modelo Project
import ProjectModel from '../models/ProjectModel';

/* Actions Methods */
// Lista de los proyectos
// GET /projects | GET /projects/index
const index = async (req, res) => {
  // 1 Pedirle a la base de datos
  // que me de todos lo proyectos que tiene
  // db.projects.find()
  try {
    log.info('Mostrando Lista de proyectos ... ⌛');
    const projectsDocs = await ProjectModel.find();
    log.info('Mostrando lista de Proyectos con éxito ... 🎉');
    res.json(projectsDocs);
  } catch (error) {
    log.error(`🧨 Error al mostrar la lista de proyectos: ${error.message}`);
    res.status(500).json(error);
  }
};

// Agrega ideas de proyectos
// GET /projects/add
const add = (req, res) => {
  res.render('projects/addProjectView', {});
  // TODO: Agregar código para agregar proyectos
};

// Procesa el formulario que Agrega ideas de proyectos
// POST /projects/add
const addPost = async (req, res) => {
  // Desestructurando la información
  // del formulario o de un posible error
  const { errorData, validData } = req;
  // Crear view models para este action method
  let project = {};
  let errorModel = {};
  // Verifico si hay error de validación
  if (errorData) {
    log.error('🧨 Se retorna objeto de error de validación 🧨');
    // Rescantado los datos del formulario
    project = errorData.value;
    // Usamos reduce para generar un objeto
    // de errores a partir de inner
    errorModel = errorData.inner.reduce((prev, curr) => {
      // Creamos una vaiabre temporal para evitar
      // el error "no-param-reassign" el cual me
      // exorta a evitar reasignar los valores de
      // los argumentos una función
      const newVal = prev;
      newVal[`${curr.path}Error`] = curr.message;
      return newVal;
    }, {});
    // La validacion falló
    return res.render('projects/addProjectView', { project, errorModel });
  }
  log.info('Se retorna un objeto Proyecto válido');
  // Crear un documento con los datos provistos
  // por el formulario y guardar dicho documento
  // en projectModel
  const projectModel = new ProjectModel(validData);
  // Siempre que se ejecuta una operación
  // que depende de un tercero, es una buena práctica
  // envolver esa operacion en un bloque try
  try {
    log.info('Salvando el Proyecto...⌛');
    // Se salva el documento projecto
    project = await projectModel.save();
    log.info('🎉 Proyecto salvado con éxito 🎉');
    // Redireccionando al recurso que lista los proyectos
    // GET /projects
    return res.redirect('/projects');
  } catch (error) {
    log.error(`Ha fallado el intento de salvar un proyecto:${error.message}`);
    return res.status(500).json({ error });
  }
};

// Exportando el controlador
export default {
  index,
  add,
  addPost,
};
