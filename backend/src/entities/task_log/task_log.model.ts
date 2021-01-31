import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('task_logs')
export default class TaskLog {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  duration_minutes!: number;

}