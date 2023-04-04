import express from 'express';
const router = express.Router();
import {updateUser, deleteUser} from '../controllers/user_controller.js';

router.put('/update/:email', async (req, res) => {
    await updateUser(req, res);
});

router.delete('/delete', async (req, res) => {
    await deleteUser(req, res);
});
export default router;