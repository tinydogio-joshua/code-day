import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import CustomerController from '../../customer/customer.controller';
import { retrieveProject } from './project.retrieve.action';
import Project from '../project.model';

// TODO: Add tests and error checking.
// TODO: Figure out appropriate return type via typeorm.
export async function createProject(name: string, customerId: number): Promise<any | undefined> {
  const customer = await CustomerController.getCustomerById(customerId);

  const newProject = await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Project)
    .values([
      {
        name,
        customer,
      }
    ])
    .execute()
    .then((value) => value.generatedMaps[0]);

  const project = retrieveProject(newProject.id);

  return project;
}


// TODO: Add tests and error checking.
export async function createProjectAction(req: Request, res: Response, next: NextFunction) {
  const project = await createProject(req.body.name, 1);

  res.json(project);
}
