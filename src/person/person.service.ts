import { Injectable } from '@nestjs/common';
import { Person } from './person';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person) private personRepository: Repository<Person>,
  ) {}

  getAllPersons(): Promise<Person[]> {
    return this.personRepository.find();
  }

  getOne(id: number): Promise<Person> {
    return this.personRepository.findOneBy({ id });
  }
}
