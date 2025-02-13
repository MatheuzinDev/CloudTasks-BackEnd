import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verificarToken = (req, res, next) => {
    const token = req.headers["autorizar"];
    console.log("Token recebido no backend:", token)

    if (!token) {
        return res.status(403).json({ auth: false, mensagem: "Token não fornecido!" });
    }

    jwt.verify(token.replace("Token ", ""), process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ auth: false, mensagem: "Token inválido!" })
        }

        req.usuarioId = decoded.id; 
        next()
    })
}
