import express from 'express';
import { createUserAction, deleteUserAction, retrieveAllUsersAction, retrieveUserAction } from './actions';

const router = express.Router();

router.get('/all', retrieveAllUsersAction);
router.post('/signup', createUserAction);
router.get('/:id/delete', deleteUserAction);
router.get('/:id', retrieveUserAction);

export default router;
