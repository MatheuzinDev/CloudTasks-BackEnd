import express from 'express'
import * as tarefasControllers from '../Controllers/tarefasControllers.js'
import { verificarToken } from "../middlewares/authMiddleware.js";
const router = express.Router()

router.get('/', tarefasControllers.getAll)
router.get('/getone/:id', tarefasControllers.getOne)
router.delete('/:id', verificarToken, tarefasControllers.deletar)
router.post('/', verificarToken, tarefasControllers.store)
router.put('/:id', tarefasControllers.update)

export default router
