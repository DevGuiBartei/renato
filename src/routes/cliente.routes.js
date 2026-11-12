import { Router } from 'express';
import {
  cadastrar,
  listar,
  atualizar,
  excluir,
} from "../controllers/clienteController.js";

const router = Router();

router.post("/", cadastrar)
router.get("/", listar)
router.put("/:id", atualizar)
router.delete("/:id", excluir)

export default router;
