import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('projects')
export default class Project {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ type: 'timestamp' })
  created_at!: Date;

  @Column({ type: 'timestamp' })
  updated_at!: Date;

}
