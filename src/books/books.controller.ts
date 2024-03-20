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
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  @ApiOperation({ summary: 'Get all books' })
  @ApiResponse({
    status: '2XX',
    description: 'all the books',
    type: Book,
    isArray: true,
  })
  getAll(): Promise<Book[]> {
    return this.booksService.getAll();
  }

  @Get(':id')
  @Get()
  @ApiOperation({ summary: 'Get the book' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'the id of the requested book',
    example: 42,
  })
  @ApiResponse({
    status: '2XX',
    description: 'the book',
    type: Book,
  })
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
