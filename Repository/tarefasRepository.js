import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const getAll = async () => {
    return await prisma.tarefas.findMany()
}

export const getOne = async (id) => {
    return await prisma.tarefas.findUnique({
        where: { id: parseInt(id) }
    })
}

export const deletar = async (id) => {
    return await prisma.tarefas.delete({
        where: { id: parseInt(id) }
    })
}

export const store = async (body) => {
    return await prisma.tarefas.create({
        data: {
            descricao: body.descricao,
            usuarios_id: body.usuarios_id
        }
    })
}

export const update = async (id, body) => {
    return await prisma.tarefas.updateMany({
        where: { id: parseInt(id) },
        data: {
            descricao: body.descricao,
            status: body.status
        }
    })
}