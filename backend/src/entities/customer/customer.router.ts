import express from 'express';
import { deleteCustomerAction, registerCustomerAction, retrieveAllCustomersAction, retrieveCustomerAction } from './actions';
import Controller from './customer.controller';

const router = express.Router();

router.get('/all', retrieveAllCustomersAction);
router.post('/register', registerCustomerAction);
router.get('/:id/delete', deleteCustomerAction);
router.post('/:id/update', Controller.update);
router.get('/:id', retrieveCustomerAction);

export default router;
