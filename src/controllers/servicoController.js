import { ServicoModel } from "../models/ServicoModel.js"

export const cadastrar = async (req, res) => {
  const { cliente_id, tipo_corte, observacoes } = req.body;

  if (!cliente_id || !tipo_corte) {
    return res
      .status(400)
      .json({ message: "Cliente e tipo de corte são obrigatórios" });
  }

  try {
    const id = await ServicoModel.create(
      cliente_id,
      tipo_corte,
      observacoes || "")

    return res
      .status(201)
      .json({ id, message: "Serviço cadastrado com vínculo ao cliente" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
