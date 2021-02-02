import express from 'express';
import { createTaskLogAction } from './actions';

const router = express.Router();

router.post('/create', createTaskLogAction);

export default router;
