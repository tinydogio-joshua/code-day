import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import User from '../user.model';
import { retrieveUser } from './user.retrieve.action';

// TODO: Add tests and error checking.
export async function deleteUser(id: number): Promise<any | undefined> {
  const user = await retrieveUser(id as unknown as number);

  await getConnection()
    .createQueryBuilder()
    .delete()
    .from(User)
    .where('id = :id', { id: id })
    .execute();

  return user;
}


export async function deleteUserAction(req: Request, res: Response, next: NextFunction) {
  const user = await deleteUser(parseInt(req.params.id, 10));

  res.json(user);
}
