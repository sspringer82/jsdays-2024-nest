import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book, CreateBook } from './book';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAll(): Book[] {
    return this.booksService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Book {
    const parsedId = parseInt(id, 10);
    return this.booksService.getOne(parsedId);
  }

  @Post()
  create(@Body() newBook: CreateBook): Book {
    return this.booksService.create(newBook);
  }

  @Put(':id')
  update(@Body() updatedBook: Book, @Param('id') id: string): Book {
    const parsedId = parseInt(id, 10);
    return this.booksService.update(parsedId, updatedBook);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    const parsedId = parseInt(id, 10);
    this.booksService.delete(parsedId);
  }
}
