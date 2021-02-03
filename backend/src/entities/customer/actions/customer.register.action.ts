import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import Customer from '../customer.model';

// TODO: Add tests and error checking.
// TODO: Figure out appropriate return type via typeorm.
export async function registerCustomer(name: string): Promise<any | undefined> {
  const customer = await getConnection()
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

  return customer;
}


// TODO: Add tests and error checking.
export async function registerCustomerAction(req: Request, res: Response, next: NextFunction) {
  const customer = await registerCustomer(req.body.name);

  res.json(customer);
}
