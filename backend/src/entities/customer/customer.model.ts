import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customers')
export default class Customer {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ type: 'timestamp' })
  created_at!: Date;

  @Column({ type: 'timestamp' })
  updated_at!: Date;

}
