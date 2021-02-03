import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import { retrieveTaskLog } from './task-log.retrieve.action';
import TaskLog from '../task_log.model';

// TODO: Add tests and error checking.
// TODO: Figure out appropriate return type via typeorm.
export async function updateTaskLog(id: number, durationMinutes: number = 0): Promise<any | undefined> {
  await getConnection()
    .createQueryBuilder()
    .update(TaskLog)
    .set({ duration_minutes: durationMinutes })
    .where('id = :id', { id: id })
    .execute();

  const taskLog = await retrieveTaskLog(id);
  return taskLog;
}


// TODO: Add tests and error checking.
export async function updateTaskLogAction(req: Request, res: Response, next: NextFunction) {
  const taskLog = await updateTaskLog(parseInt(req.params.id, 10), req.body.durationMinutes);

  res.json(taskLog);
}
