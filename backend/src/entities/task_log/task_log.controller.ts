import { NextFunction, Request, Response } from 'express';

function record(req: Request, res: Response, next: NextFunction) {
  res.send('Record task log.');
}

export default {
  record,
};
