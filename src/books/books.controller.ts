import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Book, CreateBook } from './book';
import { BooksService } from './books.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAll(): Promise<Book[]> {
    return this.booksService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Book> {
    const parsedId = parseInt(id, 10);
    return this.booksService.getOne(parsedId);
  }

  @Post()
  create(@Body() newBook: CreateBook): Promise<Book> {
    return this.booksService.create(newBook);
  }

  @Put(':id')
  update(@Body() updatedBook: Book, @Param('id') id: string): Promise<Book> {
    const parsedId = parseInt(id, 10);
    return this.booksService.update(parsedId, updatedBook);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    const parsedId = parseInt(id, 10);
    return this.booksService.delete(parsedId);
  }
}
