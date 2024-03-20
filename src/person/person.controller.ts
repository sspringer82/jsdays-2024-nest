import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePerson, Person } from './person';
import { PersonService } from './person.service';

@Controller('persons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  getAllPersons(): Person[] {
    const persons = this.personService.getAllPersons();
    return persons;
  }

  @Get(':id')
  getOnePerson(@Param('id') id: string): Person {
    return this.personService.getOnePerson(parseInt(id, 10));
  }

  @Post()
  createPerson(@Body() newPerson: CreatePerson): Person {
    console.log(newPerson);
    return { ...newPerson, id: 42 };
  }
}
