import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import Task from '../task.model';
import { retrieveTask } from './task.retrieve.action';

// TODO: Add tests and error checking.
// TODO: Figure out appropriate return type via typeorm.
export async function updateTask(id: number, title: string = '', description: string = ''): Promise<any | undefined> {
  await getConnection()
    .createQueryBuilder()
    .update(Task)
    .set({
      title,
      description,
    })
    .where('id = :id', { id: id })
    .execute();

  const task = await retrieveTask(id);

  return task;
}


// TODO: Add tests and error checking.
export async function updateTaskAction(req: Request, res: Response, next: NextFunction) {
  const task = await updateTask(parseInt(req.params.id, 10), req.body.title, req.body.description);

  res.json(task);
}
