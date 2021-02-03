import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import TaskLog from '../task_log.model';

// TODO: Add tests and error checking.
export async function retrieveAllTaskLogsForTask(taskId: number): Promise<TaskLog[] | undefined> {
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
    .where('task.id = :id', { id: taskId })
    .getMany();

  return taskLogs;
}


// TODO: Add tests and error checking.
export async function retrieveAllTaskLogsForTaskAction(req: Request, res: Response, next: NextFunction) {
  console.log(req.params);
  const taskLogs = await retrieveAllTaskLogsForTask(parseInt(req.params.id, 10));

  res.json(taskLogs);
}
