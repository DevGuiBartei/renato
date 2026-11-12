import { UserModel } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SECRET_KEY = "umachavesecreta"; // Chave secreta para assinar o token JWT

export const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const user = await UserModel.findByEmail(email);

    if (!user) {
      return res.status(401).json({ message: "E-mail inválido" });
    }

    const match = await bcrypt.compare(senha, user.senha);

    if (!match) {
      return res.status(401).json({ message: "Senha inválida" });
    }

    // Sessão com expiração de 15 minutos
    const token = jwt.sign({
      id: user.id,
      nome: user.nome,
    },
      SECRET_KEY,
      { expiresIn: "15m" });

    return res.json({
      token,
      usuario: { id: user.id, nome: user.nome, email: user.email }
    })
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
