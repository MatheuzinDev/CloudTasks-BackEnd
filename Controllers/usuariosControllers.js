import * as usuariosRepository from "./repository/usuariosRepository.js";

export const getAll = async (req, res) => {
    try {
        const usuarios = await usuariosRepository.getAll();
        res.status(200).send(usuarios);
    } catch (error) {
        res.status(500).send(`O error foi ${error}`)
    }
}