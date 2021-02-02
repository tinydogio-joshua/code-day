import express from 'express';
import { createTaskAction } from './actions/task.create.action';

const router = express.Router();

router.post('/create', createTaskAction);

export default router;
