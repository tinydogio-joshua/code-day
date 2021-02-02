import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import Project from '../project.model';
import { retrieveProject } from './project.retrieve.action';

// TODO: Add tests and error checking.
// TODO: Figure out appropriate return type via typeorm.
export async function updateProject(id: number, name: string = ''): Promise<any | undefined> {
  await getConnection()
    .createQueryBuilder()
    .update(Project)
    .set({ name: name })
    .where('id = :id', { id: id })
    .execute();

  const project = await retrieveProject(id);

  return project;
}


// TODO: Add tests and error checking.
export async function updateProjectAction(req: Request, res: Response, next: NextFunction) {
  const project = await updateProject(parseInt(req.params.id, 10), req.body.name);

  res.json(project);
}
