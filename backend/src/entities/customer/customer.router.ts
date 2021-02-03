import express from 'express';
import { registerCustomerAction } from './actions/customer.register.action';
import Controller from './customer.controller';

const router = express.Router();

router.get('/all', Controller.retrieveAll);
router.post('/register', registerCustomerAction);
router.get('/:id/delete', Controller.deleteCustomer);
router.post('/:id/update', Controller.update);
router.get('/:id', Controller.retrieve);

export default router;
