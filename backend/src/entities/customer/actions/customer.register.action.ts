import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import Customer from '../customer.model';
import { retrieveCustomer } from './customer.retrieve.action';

// TODO: Add tests and error checking.
// TODO: Figure out appropriate return type via typeorm.
export async function registerCustomer(name: string): Promise<any | undefined> {
  const newCustomer = await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Customer)
    .values([
      {
        name,
      }
    ])
    .execute()
    .then((value) => value.generatedMaps[0]);

  const customer = await retrieveCustomer(newCustomer.id);

  return customer;
}


// TODO: Add tests and error checking.
export async function registerCustomerAction(req: Request, res: Response, next: NextFunction) {
  const customer = await registerCustomer(req.body.name);

  res.json(customer);
}
