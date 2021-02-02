import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import { retrieveTask } from './task.retrieve.action';
import Task from '../task.model';

// TODO: Add tests and error checking.
export async function deleteTask(id: number): Promise<Task | undefined> {
  const task = await retrieveTask(id);

  await getConnection()
    .createQueryBuilder()
    .delete()
    .from(Task)
    .where('id = :id', { id: id })
    .execute();

  return task;
}


// TODO: Add tests and error checking.
export async function deleteTaskAction(req: Request, res: Response, next: NextFunction) {
  const task = await deleteTask(parseInt(req.params.id, 10));

  res.json(task);
}
