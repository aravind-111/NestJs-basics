import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // sql tavle === 'coffees
export class Coffee {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column('json', { nullable: true })
  flavors: string[];
}
