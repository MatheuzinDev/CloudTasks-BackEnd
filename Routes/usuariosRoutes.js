import express from 'express';
import * as usuariosControllers from "./controllers/usuariosControllers.js"
const router = express.Router()

router.get('/', usuariosControllers.getAll)