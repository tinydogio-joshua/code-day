import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks')
export default class Task {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

}
