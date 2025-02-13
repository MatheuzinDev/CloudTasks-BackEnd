import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
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
        const usuarioId = req.usuarioId
        const tarefas = await usuariosRepository.getAllTarefas(usuarioId)
        res.status(200).send(tarefas)
    } catch(error) {
        console.error("Erro ao buscar tarefas:", error)
        res.status(500).send(`O erro foi ${error}`)
    }
}

export const register = async (req, res) => {
    try {
        let { nome, email, senha } = req.body;

        const usuarioExiste = await usuariosRepository.getByEmail(email)
        if (usuarioExiste) return res.status(400).send("Email já cadastrado!")

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        await usuariosRepository.store(nome, email, senhaCriptografada)

        res.status(201).send("Usuário cadastrado com sucesso!")
    } catch (error) {
        res.status(500).send(`Erro ao cadastrar usuário: ${error}`)
    }
}

export const login = async (req, res) => {
    try {
        let { email, senha } = req.body
        const usuarioExiste = await usuariosRepository.getByEmail(email)

        if(!usuarioExiste) return res.status(404).send(`Usuário não encontrado!`)

        const senhaCorreta = await bcrypt.compare(senha, usuarioExiste.senha)

        if(!senhaCorreta) return res.status(401).send(`Senha incorreta!`)

        const token = jwt.sign(
            { id: usuarioExiste.id }, 
            process.env.JWT_SECRET,
            { expiresIn: 300 }
        )

        res.status(200).json({ auth: true , token})
    } catch(error) {
        res.status(500).json({ auth: false, mensagem: `Ocorreu um erro: ${error}`})
    }
}
