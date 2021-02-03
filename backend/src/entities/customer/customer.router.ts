import express from 'express';
import {
  deleteCustomerAction,
  registerCustomerAction,
  retrieveAllCustomersAction,
  retrieveCustomerAction,
  updateCustomerAction,
} from './actions';

const router = express.Router();

router.get('/all', retrieveAllCustomersAction);
router.post('/register', registerCustomerAction);
router.get('/:id/delete', deleteCustomerAction);
router.post('/:id/update', updateCustomerAction);
router.get('/:id', retrieveCustomerAction);

export default router;
