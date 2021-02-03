import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import Task from '../task.model';

// TODO: Add tests and error checking.
export async function retrieveAllTasksForProject(projectId: number): Promise<Task[] | undefined> {
  const tasks = await getConnection()
    .createQueryBuilder()
    .select([
      'task.id',
      'task.title',
      'task.description',
      'project.id',
    ])
    .from(Task, 'task')
    .leftJoin('task.project', 'project')
    .where('project.id = :id', { id: projectId })
    .orderBy('task.title')
    .getMany();

  return tasks;
}


// TODO: Add tests and error checking.
export async function retrieveAllTasksForProjectAction(req: Request, res: Response, next: NextFunction) {
  const tasks = await retrieveAllTasksForProject(parseInt(req.params.id, 10));

  res.json(tasks);
}
