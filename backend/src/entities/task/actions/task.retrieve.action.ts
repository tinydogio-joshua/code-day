import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import Task from '../task.model';

// TODO: Add tests and error checking.
export async function retrieveTask(id: number): Promise<Task | undefined> {
  const task = await getConnection()
    .createQueryBuilder()
    .select([
      'task.id',
      'task.title',
      'task.description',
      'project.id',
    ])
    .from(Task, 'task')
    .leftJoin('task.project', 'project')
    .where('task.id = :id', { id: id })
    .getOne();

  return task;
}


// TODO: Add tests and error checking.
export async function retrieveTaskAction(req: Request, res: Response, next: NextFunction) {
  const task = await retrieveTask(parseInt(req.params.id, 10));

  res.json(task);
}
