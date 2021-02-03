import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import { retrieveCustomer } from './customer.retrieve.action';
import Customer from '../customer.model';

// TODO: Add tests and error checking.
export async function deleteCustomer(id: number): Promise<any | undefined> {
  const customer = await retrieveCustomer(id as unknown as number);

  await getConnection()
    .createQueryBuilder()
    .delete()
    .from(Customer)
    .where('id = :id', { id: id })
    .execute();

  return customer;
}


export async function deleteCustomerAction(req: Request, res: Response, next: NextFunction) {
  const customer = await deleteCustomer(parseInt(req.params.id, 10));

  res.json(customer);
}
