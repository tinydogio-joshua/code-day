import express from 'express';
import { createUserAction, retrieveUserAction } from './actions';

const router = express.Router();

router.post('/signup', createUserAction);
router.get('/:id', retrieveUserAction);

export default router;
