import * as tarefasRepository from '../Repository/tarefasRepository.js'

export const getAll = async (req, res) => {
    try {
        const usuarios = await tarefasRepository.getAll()
        res.status(200).send(usuarios)
    } catch(error) {
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const getOne = async (req, res) => {
    try {
        let { id } = req.params
        const usuario = await tarefasRepository.getOne(id)
        res.status(200).send(usuario)
    } catch(error) {
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const deletar = async (req, res) => {
    try {
        let { id } = req.params
        await tarefasRepository.deletar(id)
        res.status(200).send(`Tarefa deletada com sucesso!`)
    } catch(error) {
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const store = async (req, res) => {
    try {
        const usuarios_id = req.usuarios_id
        let { descricao } = req.body
        await tarefasRepository.store({descricao, usuarios_id})
        res.status(200).send(`Tarefa criada com sucesso!`)
    } catch(error) {
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const update = async (req, res) => {
    try {
        let { id } = req.params
        let { descricao } = req.body
        console.log(descricao)
        await tarefasRepository.update(id, { descricao })
        res.status(200).send(`Tarefa atualizada com sucesso!`)
    } catch(error) {
        res.status(500).send(`O erro foi ${error}`)
    }
}