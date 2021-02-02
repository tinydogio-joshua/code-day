import express from 'express';
import { createUserAction, retrieveAllUsersAction, retrieveUserAction } from './actions';

const router = express.Router();

router.get('/all', retrieveAllUsersAction);
router.post('/signup', createUserAction);
router.get('/:id', retrieveUserAction);

export default router;
