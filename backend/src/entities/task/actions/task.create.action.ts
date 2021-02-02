import { NextFunction, Request, Response } from 'express';
import { getConnection } from 'typeorm';
import { retrieveProject } from '../../project/actions';
import Task from '../task.model';
import { retrieveTask } from './task.retrieve.action';

// TODO: Add tests and error checking.
// TODO: Figure out appropriate return type via typeorm.
export async function createTask(projectId: number, title: string = '', description: string = ''): Promise<any | undefined> {
  const project = await retrieveProject(projectId);

  const newTask = await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Task)
    .values([
      {
        title,
        description,
        project,
      }
    ])
    .execute()
    .then((value) => value.generatedMaps[0]);


  const task = await retrieveTask(newTask.id);

  return task;
}


// TODO: Add tests and error checking.
export async function createTaskAction(req: Request, res: Response, next: NextFunction) {
  const { projectId, title, description } = req.body;
  const task = await createTask(parseInt(projectId, 10), title, description);

  res.json(task);
}
