import express from 'express';
import { handleQuery } from '../controllers/chat.controller.js';

const router = express.Router();

router.post('/', handleQuery);

export default router;
