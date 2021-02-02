import express from 'express';
import { createTaskAction, retrieveTaskAction, updateTaskAction } from './actions';

const router = express.Router();

router.post('/create', createTaskAction);
router.post('/:id/update', updateTaskAction);
router.get('/:id', retrieveTaskAction);

export default router;
