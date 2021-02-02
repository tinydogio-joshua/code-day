import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import Task from '../task.model';

// TODO: Add tests and error checking.
export async function retrieveAllTasks(): Promise<Task[] | undefined> {
  const tasks = await getConnection()
    .createQueryBuilder()
    .select([
      'task.id',
      'task.title',
      'task.description',
    ])
    .from(Task, 'task')
    .orderBy('task.title')
    .getMany();

  return tasks;
}


// TODO: Add tests and error checking.
export async function retrieveAllTasksAction(req: Request, res: Response, next: NextFunction) {
  const tasks = await retrieveAllTasks();

  res.json(tasks);
}
