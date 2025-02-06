import express from 'express'
import * as tarefasControllers from '../Controllers/tarefasControllers.js'
const router = express.Router()

router.get('/', tarefasControllers.getAll)
router.get('/getone/:id', tarefasControllers.getOne)
router.delete('/:id', tarefasControllers.deletar)
router.post('/', tarefasControllers.store)
router.put('/:id', tarefasControllers.update)

export default router
