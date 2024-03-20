import { Injectable } from '@nestjs/common';
import { Book, CreateBook } from './book';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private booksRepository: Repository<Book>,
  ) {}

  getAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  getOne(id: number): Promise<Book> {
    return this.booksRepository.findOneBy({ id });
  }

  create(newBook: CreateBook): Promise<Book> {
    return this.booksRepository.save(newBook);
  }

  async delete(id: number): Promise<void> {
    const book = await this.booksRepository.findOneBy({ id });
    this.booksRepository.remove(book);
  }

  update(id: number, book: Book): Promise<Book> {
    return this.booksRepository.save(book);
  }
}
