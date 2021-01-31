import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('projects')
export default class Project {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

}
