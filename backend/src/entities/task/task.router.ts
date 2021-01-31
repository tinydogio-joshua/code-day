import express from 'express';
import Controller from './task.controller';

const router = express.Router();

router.get('/create', Controller.create);

export default router;
