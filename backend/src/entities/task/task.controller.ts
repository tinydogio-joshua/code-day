import { NextFunction, Request, Response } from 'express';

function create(req: Request, res: Response, next: NextFunction) {
  res.send('Create new task.');
}

export default {
  create,
};
