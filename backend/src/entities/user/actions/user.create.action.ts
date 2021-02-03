import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import { retrieveCustomer } from '../../customer/actions';
import User from '../user.model';
import { retrieveUser } from './user.retrieve.action';

// TODO: Add tests and error checking.
// TODO: Figure out appropriate return type via typeorm.
export async function createUser(email: string, customerId: number): Promise<any | undefined> {
  const customer = await retrieveCustomer(customerId);

  const newUser = await getConnection()
    .createQueryBuilder()
    .insert()
    .into(User)
    .values([
      {
        email,
        customer,
      }
    ])
    .execute()
    .then((value) => value.generatedMaps[0]);

  const user = await retrieveUser(newUser.id);

  return user;
}


// TODO: Add tests and error checking.
export async function createUserAction(req: Request, res: Response, next: NextFunction) {
  const user = await createUser(req.body.email, parseInt(req.body.customerId, 10));

  res.json(user);
}
