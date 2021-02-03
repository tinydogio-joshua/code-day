import 'reflect-metadata';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';

import { registerCustomer } from './entities/customer/actions';
import { createProject } from './entities/project/actions';
import { createTask } from './entities/task/actions';
import { createUser } from './entities/user/actions';
import { createTaskLog } from './entities/task_log/actions';

dotenv.config();

createConnection()
  .then(() => {

    (async () => {
      try {
        const customer1 = await registerCustomer('My Awesome Company')
        const customer2 = await registerCustomer('My Other Awesome Company');

        const user1 = await createUser('miu@example.com', customer1.id);
        const user2 = await createUser('bam@example.com', customer1.id);
        const user3 = await createUser('simon@example.com', customer1.id);
        const user4 = await createUser('cassie@example.com', customer2.id);
        const user5 = await createUser('chloe@example.com', customer2.id);

        const project1 = await createProject('Cat Tracker', customer1.id);
        const project2 = await createProject('Task Tracker', customer2.id);

        const task1 = await createTask(project1.id, 'Buy Cat Food', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet tellus metus. Cras nunc nisi, laoreet ac posuere consectetur, venenatis posuere quam.');
        const task2 = await createTask(project1.id, 'Buy Cat Litter', 'Praesent dictum mauris vitae ligula accumsan interdum sit amet ac quam.');
        const task3 = await createTask(project1.id, 'Buy Cat Nip', 'Phasellus eget commodo risus.');
        const task4 = await createTask(project2.id, 'Buy Tennis Balls', 'Sed maximus erat ut volutpat dictum.');
        const task5 = await createTask(project2.id, 'Buy Dog Leash', 'Fusce sagittis felis egestas pharetra dignissim.');

        const taskLog1 = await createTaskLog(task1.id, user1.id, 1);
        const taskLog2 = await createTaskLog(task1.id, user2.id, 2);
        const taskLog3 = await createTaskLog(task2.id, user3.id, 3);
        const taskLog4 = await createTaskLog(task2.id, user1.id, 4);
        const taskLog5 = await createTaskLog(task3.id, user2.id, 5);
        const taskLog6 = await createTaskLog(task4.id, user4.id, 6);
        const taskLog7 = await createTaskLog(task4.id, user5.id, 7);
        const taskLog8 = await createTaskLog(task4.id, user4.id, 8);
        const taskLog9 = await createTaskLog(task5.id, user5.id, 9);
        const taskLog10 = await createTaskLog(task5.id, user5.id, 10);
      }
      catch (e) {
        console.error(e);
      }
    })();

  })
  .catch((error) => console.error(error));
