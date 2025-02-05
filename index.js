import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import usuariosRoutes from './Routes/usuariosRoutes.js';


const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))

app.use('/usuarios', usuariosRoutes)
