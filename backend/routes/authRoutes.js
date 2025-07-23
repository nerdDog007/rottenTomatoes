import express from 'express';
import { loginOrRegister } from '../controllers/userController.js';

const router = express.Router();

router.post('/auth/login', loginOrRegister);

export default router;