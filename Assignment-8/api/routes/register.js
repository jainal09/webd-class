import express from 'express';
const router = express.Router();
import {createUser, loginUser} from '../controllers/user_controller.js';

router.post('/register', async (req, res) => {
    await createUser(req, res);
});

router.post('/login', async (req, res) => {
    await loginUser(req, res);
});

export default router;