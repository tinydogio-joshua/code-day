import express from 'express';
import Controller from './user.controller';

const router = express.Router();

router.get('/signup', Controller.signup);

export default router;
