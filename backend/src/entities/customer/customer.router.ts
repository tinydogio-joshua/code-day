import express from 'express';
import Controller from './customer.controller';

const router = express.Router();

router.post('/register', Controller.register);
router.post('/:id/update', Controller.update);
router.get('/:id', Controller.retrieve);
router.get('/:id/delete', Controller.deleteCustomer);

export default router;
