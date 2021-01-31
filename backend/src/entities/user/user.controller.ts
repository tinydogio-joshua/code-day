import express, { NextFunction, Request, Response } from 'express';

function signup(req: Request, res: Response, next: NextFunction) {
  res.send('Signup');
}

export default {
  signup,
};
