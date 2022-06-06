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
  // Desestructurando la informacion
  // del formulario
  const { name, description } = req.body;
  // Regresar un objeto con los datos
  // obtenidos del formulario
  res.status(200).json({ name, description });
};

// Exportando el controlador
export default {
  index,
  add,
  addPost,
};
