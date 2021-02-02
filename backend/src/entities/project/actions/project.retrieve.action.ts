import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import Project from '../project.model';

// TODO: Add tests and error checking.
export async function retrieveProject(id: number): Promise<Project | undefined> {
  const project = await getConnection()
    .createQueryBuilder()
    .select([
      'project.id',
      'project.name',
    ])
    .from(Project, 'project')
    .where('project.id = :id', { id: id })
    .getOne();

  return project;
}


// TODO: Add tests and error checking.
export async function retrieveProjectAction(req: Request, res: Response, next: NextFunction) {
  const project = await retrieveProject(parseInt(req.params.id, 10));

  res.json(project);
}
