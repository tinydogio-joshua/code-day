import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import User from '../user.model';

// TODO: Add tests and error checking.
export async function retrieveUser(id: number): Promise<User | undefined> {
  const user = await getConnection()
    .createQueryBuilder()
    .select([
      'user.id',
      'user.email',
      'customer.id',
    ])
    .from(User, 'user')
    .leftJoin('user.customer', 'customer')
    .where('user.id = :id', { id: id })
    .getOne();

  return user;
}


// TODO: Add tests and error checking.
export async function retrieveUserAction(req: Request, res: Response, next: NextFunction) {
  const customer = await retrieveUser(parseInt(req.params.id, 10));

  res.json(customer);
}
