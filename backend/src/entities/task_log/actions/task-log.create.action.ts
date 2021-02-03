import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import { retrieveTask } from '../../task/actions';
import { retrieveUser } from '../../user/actions';
import TaskLog from '../task_log.model';
import { retrieveTaskLog } from './task-log.retrieve.action';

// TODO: Add tests and error checking.
// TODO: Figure out appropriate return type via typeorm.
export async function createTaskLog(taskId: number, userId: number, durationMinutes: number = 0): Promise<any | undefined> {
  const task = await retrieveTask(taskId);
  const user = await retrieveUser(userId);

  const newTaskLog = await getConnection()
    .createQueryBuilder()
    .insert()
    .into(TaskLog)
    .values([
      {
        task,
        user,
        duration_minutes: durationMinutes,
      }
    ])
    .execute()
    .then((value) => value.generatedMaps[0]);

  const taskLog = await retrieveTaskLog(newTaskLog.id);

  return taskLog;
}


// TODO: Add tests and error checking.
export async function createTaskLogAction(req: Request, res: Response, next: NextFunction) {
  const taskLog = await createTaskLog(
    parseInt(req.body.taskId, 10),
    parseInt(req.body.userId, 10),
    parseInt(req.body.durationMinutes, 10),
  );

  res.json(taskLog);
}
