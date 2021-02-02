import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import { retrieveUser } from './user.retrieve.action';
import User from '../user.model';

// TODO: Add tests and error checking.
// TODO: Figure out appropriate return type via typeorm.
export async function updateUser(id: number, email: string = ''): Promise<any | undefined> {
  await getConnection()
    .createQueryBuilder()
    .update(User)
    .set({ email })
    .where('id = :id', { id: id })
    .execute();

  const user = await retrieveUser(id);

  return user;
}


// TODO: Add tests and error checking.
export async function updateUserAction(req: Request, res: Response, next: NextFunction) {
  const user = await updateUser(parseInt(req.params.id, 10), req.body.email);

  res.json(user);
}
