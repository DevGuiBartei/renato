import { ClientModel } from "../models/clienteModel.js"
import bcrypt from "bcryptjs"

export const cadastrar = async (req, res) => {
  const { nome, cpf, telefone } = req.body;
  if (!nome || !cpf || !telefone) {
    return res.status(400).json({ error: "Preencha todos os campos" });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const cpfCriptografado = await bcrypt.hash(cpf, salt);

    const cliente = await ClientModel.create(nome, cpfCriptografado, telefone);

    return res.status(201).json({ cliente, message: "Cliente cadastrado com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const listar = async (req, res) => {
  try {
    const { busca } = req.query;
    const clientes = await ClientModel.search(busca || "");
    return res.json(clientes);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

};

export const atualizar = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, telefone } = req.body;
    await ClientModel.update(id, nome, telefone);
    return res.json({ message: "Cliente atualizado com sucesso" })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
};

export const excluir = async (req, res) => {
  try {
    const { id } = req.params;
    await ClientModel.delete(id);
    return res.json({ message: "Cliente deletado com sucesso" })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
