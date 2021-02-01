import { NextFunction, request, Request, Response } from 'express';
import { getConnection, getManager } from 'typeorm';
import Customer from './customer.model';

// ====================================================================================
//  Utility - getCustomerById()
// ====================================================================================

async function getCustomerById(id: number): Promise<Customer | undefined> {
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


// ====================================================================================
//  Delete Customer - deleteCustomer()
// ====================================================================================

async function deleteCustomer(req: Request, res: Response, next: NextFunction) {
  const customer = await getCustomerById(req.params.id as unknown as number);

  await getConnection()
    .createQueryBuilder()
    .delete()
    .from(Customer)
    .where('id = :id', { id: req.params.id })
    .execute();

  res.json(customer);
}


// ====================================================================================
//  Register Customer - register()
// ====================================================================================

async function register(req: Request, res: Response, next: NextFunction) {
  const customerRepository = getManager().getRepository(Customer);
  const customer = customerRepository.create();

  customer.name = req.body?.name ?? 'INDIVIDUAL ACCOUNT';

  await customerRepository.save(customer);

  res.json(customer);
}


// ====================================================================================
//  Retrieve Customer - retrieve()
// ====================================================================================

async function retrieve(req: Request, res: Response, next: NextFunction) {
  const customer = await getCustomerById(req.params.id as unknown as number);

  res.json(customer);
}


// ====================================================================================
//  Update Customer - Update()
// ====================================================================================

async function update(req: Request, res: Response, next: NextFunction) {
  await getConnection()
    .createQueryBuilder()
    .update(Customer)
    .set({ name: req.body.name })
    .where("id = :id", { id: req.params.id })
    .execute();

  const customer = await getCustomerById(req.params.id as unknown as number);

  res.json(customer);
}


// ------------------------------------------------------------------------------------

export default {
  deleteCustomer,
  getCustomerById,
  register,
  retrieve,
  update,
};
