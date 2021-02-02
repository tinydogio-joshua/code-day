import express from 'express';
import {
  createTaskAction,
  deleteTaskAction,
  retrieveAllTasksAction,
  retrieveTaskAction,
  updateTaskAction,
} from './actions';

const router = express.Router();

router.get('/all', retrieveAllTasksAction);
router.post('/create', createTaskAction);
router.get('/:id/delete', deleteTaskAction);
router.post('/:id/update', updateTaskAction);
router.get('/:id', retrieveTaskAction);

export default router;
