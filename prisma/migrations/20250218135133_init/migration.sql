-- CreateEnum
CREATE TYPE "Status" AS ENUM ('pendente', 'concluida');

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "senha" VARCHAR(255) NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tarefas" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT,
    "status" "Status" NOT NULL DEFAULT 'pendente',
    "usuarios_id" INTEGER NOT NULL,

    CONSTRAINT "Tarefas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");

-- AddForeignKey
ALTER TABLE "Tarefas" ADD CONSTRAINT "Tarefas_usuarios_id_fkey" FOREIGN KEY ("usuarios_id") REFERENCES "Usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
