import express from 'express';
import {
  createTaskLogAction,
  deleteTaskLogAction,
  retrieveAllTaskLogsAction,
  retrieveTaskLogAction,
  updateTaskLogAction,
} from './actions';

const router = express.Router();

router.get('/all', retrieveAllTaskLogsAction);
router.post('/create', createTaskLogAction);
router.get('/:id/delete', deleteTaskLogAction);
router.post('/:id/update', updateTaskLogAction);
router.get('/:id', retrieveTaskLogAction);

export default router;
