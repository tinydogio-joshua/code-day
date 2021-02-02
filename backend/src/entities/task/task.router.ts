import express from 'express';
import { createTaskAction, retrieveAllTasksAction, retrieveTaskAction, updateTaskAction } from './actions';

const router = express.Router();

router.get('/all', retrieveAllTasksAction);
router.post('/create', createTaskAction);
router.post('/:id/update', updateTaskAction);
router.get('/:id', retrieveTaskAction);

export default router;
