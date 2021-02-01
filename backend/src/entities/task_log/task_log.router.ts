import express from 'express';
import Controller from './task_log.controller';

const router = express.Router();

router.get('/record', Controller.record);

export default router;
