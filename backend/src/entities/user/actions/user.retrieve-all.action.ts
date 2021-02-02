import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import User from '../user.model';

// TODO: Add tests and error checking.
export async function retrieveAllUsers(): Promise<User[] | undefined> {
  const users = await getConnection()
    .createQueryBuilder()
    .select([
      'user.id',
      'user.email',
      'customer.id',
    ])
    .from(User, 'user')
    .leftJoin('user.customer', 'customer')
    .orderBy('user.email')
    .getMany();

  return users;
}


// TODO: Add tests and error checking.
export async function retrieveAllUsersAction(req: Request, res: Response, next: NextFunction) {
  const users = await retrieveAllUsers();

  res.json(users);
}
