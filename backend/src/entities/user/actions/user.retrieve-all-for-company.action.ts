import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import User from '../user.model';

// TODO: Add tests and error checking.
export async function retrieveAllUsersForCompany(companyId: number): Promise<User[] | undefined> {
  const users = await getConnection()
    .createQueryBuilder()
    .select([
      'user.id',
      'user.email',
      'customer.id',
    ])
    .from(User, 'user')
    .leftJoin('user.customer', 'customer')
    .where('customer.id = :id', { id: companyId })
    .orderBy('user.email')
    .getMany();

  return users;
}


// TODO: Add tests and error checking.
export async function retrieveAllUsersForCompanyAction(req: Request, res: Response, next: NextFunction) {
  const users = await retrieveAllUsersForCompany(parseInt(req.params.id, 10));

  res.json(users);
}
