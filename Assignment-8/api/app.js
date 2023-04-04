import express from 'express';

import authRouter from './routes/register.js';
import updateRouter from './routes/updateUser.js';
import getUsersRouter from './routes/getUsers.js';


const apiRoutes = express.Router();

// mount the auth routes at the /auth path
apiRoutes.use('/auth', authRouter);

// mount the user update routes at the /users path
apiRoutes.use('/users', updateRouter);

// mount the user retrieval routes at the /get path
apiRoutes.use('/get', getUsersRouter);

export default apiRoutes;

