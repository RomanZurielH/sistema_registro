// Import Express Router
import { Router } from 'express';
// Import el controlador de home
import homeController from '../controllers/homeController';

// Creo una instancia del Router Express
const router = new Router();

// Get "/index"
router.get(['/', '/home'], homeController.index);

// Get "/admin"
router.get(['/', '/admin'], homeController.admin);

// Get "/users"
router.get(['/', '/users'], homeController.users);

// Get "/residentes"
router.get(['/', '/residentes'], homeController.residentes);

// Get "/about"
router.get('/about', homeController.about);

// Exportando Router
export default router;
