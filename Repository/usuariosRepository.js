import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAll = async() => {
    return await prisma.usuarios.findMany()
}