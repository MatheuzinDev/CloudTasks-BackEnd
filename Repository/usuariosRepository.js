import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAll = async () => {
    return await prisma.usuarios.findMany()
}

export const getOne = async (id) => {
    return await prisma.usuarios.findUnique({
        where: { id: parseInt(id) }
    })
}

export const deletar = async (id) => {
    return await prisma.usuarios.delete({
        where: { id: parseInt(id) }
    })
}

export const store = async (body) => {
    return await prisma.usuarios.create({
        data: body
    })
}

export const update = async (id, body) => {
    return await prisma.usuarios.update({
        where: { id: parseInt(id) },
        data: body
    })
}

export const getAllTarefas = async (usuario_id) => {
    return await prisma.tarefas.findMany({
        where: { usuarios_id: parseInt(usuario_id) } 
    })
}