import express from 'express';
import { createTaskLogAction, deleteTaskLogAction, retrieveTaskLogAction } from './actions';

const router = express.Router();

router.post('/create', createTaskLogAction);
router.get('/:id/delete', deleteTaskLogAction);
router.get('/:id', retrieveTaskLogAction);

export default router;
