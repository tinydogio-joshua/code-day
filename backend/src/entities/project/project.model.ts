import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Customer from '../customer/customer.model';
import Task from '../task/task.model';

@Entity('projects')
export default class Project {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @ManyToOne(() => Customer, customer => customer.projects)
  @JoinColumn({ name: 'customer_id' })
  customer!: Customer;

  @OneToMany(() => Task, task => task.project)
  tasks!: Task[];

  @Column({ type: 'timestamp' })
  created_at!: Date;

  @Column({ type: 'timestamp' })
  updated_at!: Date;

}
