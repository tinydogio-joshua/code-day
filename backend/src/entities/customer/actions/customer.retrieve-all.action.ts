import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import Customer from '../customer.model';

// TODO: Add tests and error checking.
export async function retrieveAllCustomers(): Promise<Customer[] | undefined> {
  const customers = await getConnection()
    .createQueryBuilder()
    .select([
      'customer.id',
      'customer.name',
    ])
    .from(Customer, 'customer')
    .getMany();

  return customers;
}


// TODO: Add tests and error checking.
export async function retrieveAllCustomersAction(req: Request, res: Response, next: NextFunction) {
  const customers = await retrieveAllCustomers();

  res.json(customers);
}
