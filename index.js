import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import usuariosRoutes from './Routes/usuariosRoutes.js'
import tarefasRoutes from './Routes/tarefasRoutes.js'

const app = express();
dotenv.config()
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))

app.use('/usuarios', usuariosRoutes)
app.use('/tarefas', tarefasRoutes)
