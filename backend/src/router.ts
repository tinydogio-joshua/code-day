import express from 'express';
import CustomerRouter from './entities/customer/customer.router';
import ProjectRouter from './entities/project/project.router';
import TaskRouter from './entities/task/task.router';
import UserRouter from './entities/user/user.router';

const router = express.Router();

router.use('/customer', CustomerRouter);
router.use('/project', ProjectRouter);
router.use('/task', TaskRouter);
router.use('/user', UserRouter);

export default router;
