import ds from "../config/database.js"

export const ServicoModel = {
  async create(cliente_id, tipo_corte, observacoes) {
    const [result] = await ds.query(
      "INSERT INTO servicos_cliente (cliente_id, tipo_corte, observacoes) VALUES(?, ?, ?)",
      [cliente_id, tipo_corte, observacoes]
    )
    return result.insertId;
  }
}
