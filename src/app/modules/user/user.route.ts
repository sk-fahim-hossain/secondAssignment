import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

router.post('/user', userController.userCreate);
router.get('/users', userController.getAllUsers);

export const userRoutes = router;
