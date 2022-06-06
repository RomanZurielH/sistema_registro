// Importando el Router de Express
import { Router } from 'express';

// Importar el controlador de proyectos
import projectController from '../controllers/projectController';

// Crear la instancia del Router
const router = new Router();

/* ------ GET ------ */
// Listade proyectos
// GET /projects | GET /projects/index
router.get(['/', '/index'], projectController.index);

// Envia el formulario para registrar una idea de proyecto
// get /projects/add
router.get('/add', projectController.add);

// Exportando el enrutador Projects
export default router;
