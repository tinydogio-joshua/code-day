import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import Project from '../project.model';

// TODO: Add tests and error checking.
export async function retrieveAllProjectsForCustomer(customerId: number): Promise<Project[] | undefined> {
  console.log(`customerID: ${customerId}`);
  const projects = await getConnection()
    .createQueryBuilder()
    .select([
      'project.id',
      'project.name',
      'customer.id',
    ])
    .from(Project, 'project')
    .leftJoin('project.customer', 'customer')
    .where('customer.id = :id', { id: customerId })
    .orderBy('project.name')
    .getMany();

  return projects;
}


// TODO: Add tests and error checking.
export async function retrieveAllProjectsForCustomerAction(req: Request, res: Response, next: NextFunction) {
  const projects = await retrieveAllProjectsForCustomer(parseInt(req.params.id, 10));

  res.json(projects);
}
