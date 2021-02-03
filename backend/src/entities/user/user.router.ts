import express from 'express';
import {
  createUserAction,
  deleteUserAction,
  retrieveAllUsersAction,
  retrieveAllUsersForCompanyAction,
  retrieveUserAction,
  updateUserAction,
} from './actions';

const router = express.Router();

router.get('/all', retrieveAllUsersAction);
router.get('/all-for-customer/:id', retrieveAllUsersForCompanyAction);
router.post('/signup', createUserAction);
router.get('/:id/delete', deleteUserAction);
router.post('/:id/update', updateUserAction);
router.get('/:id', retrieveUserAction);

export default router;
