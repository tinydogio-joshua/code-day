import express from 'express';
import UserController from './user.controller';

const router = express.Router();

router.get('/signup', UserController.signup);

export default router;
