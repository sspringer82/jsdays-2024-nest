import { Injectable } from '@nestjs/common';
import { Person } from './person';

@Injectable()
export class PersonService {
  getAllPersons(): Person[] {
    const persons = [
      {
        id: 1,
        firstName: 'Klaus',
        lastName: 'Schmitt',
      },
    ];
    return persons;
  }
}
