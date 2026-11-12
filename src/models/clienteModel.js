import db from "../config/database.js"

export const ClientModel = {
  async create(nome, cpfCriptografado, telefone) {
    const [result] = await db.query(
      "INSERT INTO clientes (nome, cpf_criptografado, telefone) VALUES(?, ?, ?)", [nome, cpfCriptografado, telefone]
    );

    return result.insertId;
  },

  async search(termo = "") {
    const [rows] = await db.query(
      "SELECT nome, telefone FROM clientes WHERE nome LIKE ?",
      [`%${termo}%`]
    );
    return rows;
  },

  async update(id, nome, telefone) {
    await db.query("UPDATE clientes SET nome = ?, telefone = ? WHERE id = ?",
      [nome, telefone, id]
    )
  },

  async delete(id) {
    await db.query("DELETE FROM clientes WHERE id = ?", [id]);
  },
}
