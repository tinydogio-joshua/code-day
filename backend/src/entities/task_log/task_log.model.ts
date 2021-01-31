import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('task_logs')
export default class TaskLog {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  duration_minutes!: number;

  @Column({ type: 'timestamp' })
  created_at!: Date;

  @Column({ type: 'timestamp' })
  updated_at!: Date;

}
