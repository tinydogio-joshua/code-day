import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Task from '../task/task.model';
import User from '../user/user.model';

@Entity('task_logs')
export default class TaskLog {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  duration_minutes!: number;

  @ManyToOne(() => Task, task => task.logs)
  @JoinColumn({ name: 'task_id' })
  task!: Task;

  @ManyToOne(() => User, user => user.logs)
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @Column({ type: 'timestamp' })
  created_at!: Date;

  @Column({ type: 'timestamp' })
  updated_at!: Date;

}
