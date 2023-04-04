import express from 'express';
const router = express.Router();

import {getAllUsers} from '../controllers/user_controller.js';

router.get('/users', async (req, res) => {
    await getAllUsers(req, res);
});
export default router;