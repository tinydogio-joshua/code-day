import { NextFunction, Request, Response } from 'express';

function signup(req: Request, res: Response, next: NextFunction) {
  res.send('New user signup.');
}

export default {
  signup,
};
