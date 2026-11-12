import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import ClienteRoutes from "./routes/cliente.routes.js"
import servicoRoutes from "./routes/servico.routes.js"
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes)
app.use("/api/clientes", ClienteRoutes)
app.use("/api/servicos", servicoRoutes)

export default app;
