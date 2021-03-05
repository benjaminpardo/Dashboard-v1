const { Router } = require('express');
const router = Router();
const Role = require('../helpers/role');

// Controllers
const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');

// Middlewares
const authorize = require('../middlewares/authorize');

// Rutas
router.post('/auth/register', AuthController.register);

router.post('/views/tareas', AuthController.nuevaTarea);

router.post('/auth/login', AuthController.login);
router.get('/protected', authorize([Role.User, Role.Admin]), (req, res) => {
    res.send("Ruta protegida");
});
router.get('/views/tareas/:id', authorize([Role.Admin]), UserController.getById);

router.get('/views/ListaTareas', AuthController.getAllTask);
router.delete('/views/ListaTareas/:id', AuthController.deleteTarea); 

router.get('/admin/TodasTareas', authorize([Role.Admin]), AuthController.getAllTask);

router.get('/users', authorize([Role.Admin]), UserController.getAll);
router.get('/users/:id', authorize([Role.Admin]), UserController.getById);
router.delete('/users/:id', authorize([Role.Admin]), UserController.delete);

module.exports = router;