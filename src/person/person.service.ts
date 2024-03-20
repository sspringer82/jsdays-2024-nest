import { Injectable } from '@nestjs/common';
import { CreatePerson, Person } from './person';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person) private personRepository: Repository<Person>,
  ) {}

  getAll(): Promise<Person[]> {
    return this.personRepository.find();
  }

  getOne(id: number): Promise<Person> {
    return this.personRepository.findOneBy({ id });
  }

  create(newPerson: CreatePerson): Promise<Person> {
    return this.personRepository.save(newPerson);
  }

  async update(id: number, updatedPerson: Person): Promise<Person> {
    return this.personRepository.save(updatedPerson);
  }

  async delete(id: number): Promise<void> {
    const person = await this.getOne(id);

    await this.personRepository.remove(person);
  }
}
