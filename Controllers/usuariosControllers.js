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

export const deletar = async (req, res) => {
    try {
        let { id } = req.params;
        await usuariosRepository.deletar(id)
        res.status(200).send(`Usuário deletado com sucesso!`)
    } catch(error) {
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const store = async (req, res) => {
    try {
        let body = req.body
        await usuariosRepository.store(body)
        res.status(200).send(`Usuário cadastrado com sucesso!`)
    } catch(error) {
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const update = async (req, res) => {
    try {
        let { id } = req.params
        let body = req.body
        await usuariosRepository.update(id, body)
        res.status(200).send(`Usuário atualizado com sucesso!`)
    } catch(error) {
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const getAllTarefas = async (req, res) => {
    try {
        let { id } = req.params
        const tarefas = await usuariosRepository.getAllTarefas(id)
        res.status(200).send(tarefas)
    } catch(error) {
        res.status(500).send(`O erro foi ${error}`)
    }
}
