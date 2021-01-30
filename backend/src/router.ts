import express from 'express';
import UserRouter from './user/user.router';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, world!!!');
});

router.get('/again', (req, res) => {
  res.send('Hello, again!!!');
});

router.use('/user', UserRouter);

export default router;
