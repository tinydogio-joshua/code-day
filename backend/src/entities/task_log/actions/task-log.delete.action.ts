import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import TaskLog from '../task_log.model';
import { retrieveTaskLog } from './task-log.retrieve.action';

// TODO: Add tests and error checking.
export async function deleteTaskLog(id: number): Promise<any | undefined> {
  const taskLog = await retrieveTaskLog(id as unknown as number);

  await getConnection()
    .createQueryBuilder()
    .delete()
    .from(TaskLog)
    .where('id = :id', { id: id })
    .execute();

  return taskLog;
}


export async function deleteTaskLogAction(req: Request, res: Response, next: NextFunction) {
  const taskLog = await deleteTaskLog(parseInt(req.params.id, 10));

  res.json(taskLog);
}
