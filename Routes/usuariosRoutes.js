import express from 'express';
import * as usuariosControllers from "../Controllers/usuariosControllers.js"
const router = express.Router()

router.get('/', usuariosControllers.getAll)
router.get('/getone/:id', usuariosControllers.getOne)
router.delete('/:id', usuariosControllers.deletar)
router.post('/', usuariosControllers.store)
router.put('/:id', usuariosControllers.update)
router.get('/tarefas/:id', usuariosControllers.getAllTarefas)

export default router