import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import Customer from '../customer.model';
import { retrieveCustomer } from './customer.retrieve.action';

// TODO: Add tests and error checking.
// TODO: Figure out appropriate return type via typeorm.
export async function updateCustomer(id: number, name: string = ''): Promise<any | undefined> {
  await getConnection()
    .createQueryBuilder()
    .update(Customer)
    .set({ name })
    .where('id = :id', { id: id })
    .execute();

  const customer = await retrieveCustomer(id);

  return customer;
}


// TODO: Add tests and error checking.
export async function updateCustomerAction(req: Request, res: Response, next: NextFunction) {
  const customer = await updateCustomer(parseInt(req.params.id, 10), req.body.name);

  res.json(customer);
}
