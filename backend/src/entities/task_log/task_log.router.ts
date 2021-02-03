import express from 'express';
import { createTaskLogAction, retrieveTaskLogAction } from './actions';

const router = express.Router();

router.post('/create', createTaskLogAction);
router.get('/:id', retrieveTaskLogAction);

export default router;
