import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import TaskLog from '../task_log.model';

// TODO: Add tests and error checking.
export async function retrieveAllTaskLogs(): Promise<TaskLog[] | undefined> {
  const taskLogs = await getConnection()
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
    .getMany();

  return taskLogs;
}


// TODO: Add tests and error checking.
export async function retrieveAllTaskLogsAction(req: Request, res: Response, next: NextFunction) {
  const taskLogs = await retrieveAllTaskLogs();

  res.json(taskLogs);
}
