import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type CreatePerson = Omit<Person, 'id'>;

@Entity('persons')
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
