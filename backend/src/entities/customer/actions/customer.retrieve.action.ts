import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import Customer from '../customer.model';

// TODO: Add tests and error checking.
export async function retrieveCustomer(id: number): Promise<Customer | undefined> {
  const customer = await getConnection()
    .createQueryBuilder()
    .select([
      'customer.id',
      'customer.name',
    ])
    .from(Customer, 'customer')
    .where('customer.id = :id', { id: id })
    .getOne();

  return customer;
}


// TODO: Add tests and error checking.
export async function retrieveCustomerAction(req: Request, res: Response, next: NextFunction) {
  const customer = await retrieveCustomer(parseInt(req.params.id, 10));

  res.json(customer);
}
