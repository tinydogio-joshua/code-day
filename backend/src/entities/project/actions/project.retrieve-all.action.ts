import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import Project from '../project.model';

// TODO: Add tests and error checking.
export async function retrieveAllProjects(): Promise<Project[] | undefined> {
  const projects = await getConnection()
    .createQueryBuilder()
    .select([
      'project.id',
      'project.name',
    ])
    .from(Project, 'project')
    .orderBy('project.name')
    .getMany();

  return projects;
}


// TODO: Add tests and error checking.
export async function retrieveAllProjectsAction(req: Request, res: Response, next: NextFunction) {
  const projects = await retrieveAllProjects();

  res.json(projects);
}
