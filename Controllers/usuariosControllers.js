import * as usuariosRepository from "../Repository/usuariosRepository.js"

export const getAll = async (req, res) => {
    try {
        const usuarios = await usuariosRepository.getAll();
        res.status(200).send(usuarios);
    } catch (error) {
        res.status(500).send(`O error foi ${error}`)
    }
}

export const getOne = async (req, res) => {
    try {
        let { id } = req.params;
        const usuario = await usuariosRepository.getOne(id)
        res.status(200).send(usuario)
    } catch(error){
        res.status(500).send(`O erro foi ${error}`)
    }
}
