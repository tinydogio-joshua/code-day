import express from 'express';
import { retrieveAllTaskLogsForTaskAction } from '../task_log/actions';
import {
  createTaskAction,
  deleteTaskAction,
  retrieveAllTasksAction,
  retrieveAllTasksForProjectAction,
  retrieveTaskAction,
  updateTaskAction,
} from './actions';

const router = express.Router();

router.get('/all', retrieveAllTasksAction);
router.get('/all-for-project/:id', retrieveAllTasksForProjectAction);
router.post('/create', createTaskAction);
router.get('/:id/delete', deleteTaskAction);
router.get('/:id/logs', retrieveAllTaskLogsForTaskAction);
router.post('/:id/update', updateTaskAction);
router.get('/:id', retrieveTaskAction);

export default router;
