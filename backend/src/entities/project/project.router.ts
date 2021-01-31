import express from 'express';
import Controller from './project.controller';

const router = express.Router();

router.get('/register', Controller.register);

export default router;
