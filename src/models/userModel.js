import db from "../config/database.js";

export const UserModel = {
  async findByEmail(email) {
    const [rows] = await db.query("SELECT * FROM usuarios WHERE email = ? ", [email]);
    return rows[0];
  }
}
