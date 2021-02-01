import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Customer from '../customer/customer.model';
import TaskLog from '../task_log/task_log.model';

@Entity('users')
export default class User {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @ManyToOne(() => Customer, customer => customer.users)
  @JoinColumn({ name: 'customer_id' })
  customer!: Customer | undefined;

  @OneToMany(() => TaskLog, log => log.user)
  logs!: TaskLog[];

  @Column({ type: 'timestamp' })
  created_at!: Date;

  @Column({ type: 'timestamp' })
  updated_at!: Date;

}
