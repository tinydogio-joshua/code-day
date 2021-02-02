import express from 'express';
import {
  createProjectAction,
  deleteProjectAction,
  retrieveAllProjectsAction,
  retrieveProjectAction,
  updateProjectAction,
} from './actions';

const router = express.Router();

router.get('/all', retrieveAllProjectsAction);
router.post('/create', createProjectAction);
router.get('/:id/delete', deleteProjectAction);
router.post('/:id/update', updateProjectAction);
router.get('/:id', retrieveProjectAction);

export default router;
