import express from 'express';
import * as usuariosControllers from "../Controllers/usuariosControllers.js";
import { verificarToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get('/', usuariosControllers.getAll);
router.get('/getone/:id', usuariosControllers.getOne);
router.delete('/:id', verificarToken, usuariosControllers.deletar); 
router.post('/', usuariosControllers.store);
router.put('/:id', verificarToken, usuariosControllers.update); 
router.get('/tarefas/:id', verificarToken, usuariosControllers.getAllTarefas); 
router.post('/register', usuariosControllers.register);
router.post("/login", usuariosControllers.login);

export default router;
