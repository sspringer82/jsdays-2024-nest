import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePerson, Person } from './person';
import { PersonService } from './person.service';

@Controller('persons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  getAllPersons(): Promise<Person[]> {
    const persons = this.personService.getAll();
    return persons;
  }

  @Get(':id')
  getOnePerson(@Param('id') id: string): Promise<Person> {
    return this.personService.getOne(parseInt(id, 10));
  }

  @Post()
  createPerson(@Body() newPerson: CreatePerson): Promise<Person> {
    return this.personService.create(newPerson);
  }

  @Put(':id')
  update(
    @Body() updatedPerson: Person,
    @Param('id') id: string,
  ): Promise<Person> {
    return this.personService.update(parseInt(id, 10), updatedPerson);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.personService.delete(parseInt(id, 10));
  }
}
