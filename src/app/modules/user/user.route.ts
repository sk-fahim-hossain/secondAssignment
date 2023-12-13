import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

router.post('/user', userController.userCreate);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getSingleUser);

export const userRoutes = router;
