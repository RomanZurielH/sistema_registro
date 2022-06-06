// Importando el Router de Express
import { Router } from 'express';

// Importar el validador
import Validate from '../validators/validateFactory';
// Importamos el esquema de validación
import projectValidator from '../validators/projectValidator';

// Importar el controlador de proyectos
import projectController from '../controllers/projectController';

// Crear la instancia del Router
const router = new Router();

/* ------ GET ------ */
// Listar proyector
// GET /projects | GET /projects/index
router.get(['/', '/index'], projectController.index);

// Envia el formulario para registrar una idea de proyecto
// get /projects/add
router.get('/add', projectController.add);

/* ------ POST ------ */
// Procesa el formulario que Agrega ideas de proyectos
// POST /projects/add
router.post(
  '/add',
  Validate({
    shape: projectValidator.projectSchema,
    getObject: projectValidator.getProject,
  }),
  projectController.addPost
);

// Exportando el enrutador Projects
export default router;
