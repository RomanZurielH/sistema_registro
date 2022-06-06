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
  res.send('Agregando ideas de proyectos 🚧');
  // TODO: Agregar codigo para agregar proyectos
};

// Exportando el controlador
export default {
  index,
  add,
};
