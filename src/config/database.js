import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

class DatabaseConnection {
  constructor() {
    if (!DatabaseConnection.instance) {
      this.pool = mysql.createPool({
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "saep_db",
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
      });
      DatabaseConnection.instance = this;
    }
  }

  getPool() {
    return this.pool;
  }
}

const connection = new DatabaseConnection();
export default connection.getPool();

