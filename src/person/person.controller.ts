import { Controller, Get } from '@nestjs/common';
import { Person } from './person';
import { PersonService } from './person.service';

@Controller('persons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  getAllPersons(): Person[] {
    const persons = this.personService.getAllPersons();
    return persons;
  }
}
