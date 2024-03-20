import { Injectable } from '@nestjs/common';
import { Person } from './person';

@Injectable()
export class PersonService {
  private persons: Person[] = [
    {
      id: 1,
      firstName: 'Klaus',
      lastName: 'Schmitt',
    },
  ];

  getAllPersons(): Person[] {
    const persons = this.persons;
    return persons;
  }

  getOnePerson(id: number): Person {
    return this.persons.find((person) => person.id === id);
  }
}
