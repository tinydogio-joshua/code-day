import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import { retrieveProject } from './project.retrieve.action';
import Project from '../project.model';

// TODO: Add tests and error checking.
export async function deleteProject(id: number): Promise<any | undefined> {
  const project = await retrieveProject(id as unknown as number);

  await getConnection()
    .createQueryBuilder()
    .delete()
    .from(Project)
    .where('id = :id', { id: id })
    .execute();

  return project;
}


export async function deleteProjectAction(req: Request, res: Response, next: NextFunction) {
  const project = await deleteProject(parseInt(req.params.id, 10));

  res.json(project);
}
