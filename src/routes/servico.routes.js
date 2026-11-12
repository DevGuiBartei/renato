import { Router } from 'express';
import { cadastrar } from '../controllers/servicoController.js';

const router = Router();

router.post("/", cadastrar)

export default router;
