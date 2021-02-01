import { NextFunction, Request, Response } from 'express';

function register(req: Request, res: Response, next: NextFunction) {
  res.send('Register new customer.');
}

export default {
  register,
};
