import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import TaskLog from '../task_log.model';

// TODO: Add tests and error checking.
export async function retrieveTaskLog(id: number): Promise<TaskLog | undefined> {
  const log = await getConnection()
    .createQueryBuilder()
    .select([
      'log.id',
      'log.duration_minutes',
      'task.id',
      'user.id',
    ])
    .from(TaskLog, 'log')
    .leftJoin('log.task', 'task')
    .leftJoin('log.user', 'user')
    .where('log.id = :id', { id: id })
    .getOne();

  return log;
}


// TODO: Add tests and error checking.
export async function retrieveTaskLogAction(req: Request, res: Response, next: NextFunction) {
  const log = await retrieveTaskLog(parseInt(req.params.id, 10));

  res.json(log);
}
