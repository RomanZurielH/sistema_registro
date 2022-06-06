// Import Express Router
import { Router } from 'express';
// Import el controlador de home
import homeController from '../controllers/homeController';

// Creo una instancia del Router Express
const router = new Router();

// Get "/"
router.get('/', homeController.index);

// Get "/about"
router.get('/about', homeController.about);

// Exportando Router
export default router;
