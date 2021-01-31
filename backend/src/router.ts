import express from 'express';
import CustomerRouter from './entities/customer/customer.router';
import UserRouter from './entities/user/user.router';

const router = express.Router();

router.use('/customer', CustomerRouter);
router.use('/user', UserRouter);

export default router;
