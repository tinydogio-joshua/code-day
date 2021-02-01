import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Project from '../project/project.model';
import User from '../user/user.model';

@Entity('customers')
export default class Customer {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Project, project => project.customer)
  projects!: Project[];

  @OneToMany(() => User, user => user.customer)
  users!: User[];

  @Column({ type: 'timestamp' })
  created_at!: Date;

  @Column({ type: 'timestamp' })
  updated_at!: Date;
}
