import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Book } from './book';
import { Repository } from 'typeorm';

describe('BooksService', () => {
  let service: BooksService;
  let repository: Repository<Book>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BooksService,
        {
          provide: getRepositoryToken(Book),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<BooksService>(BooksService);
    repository = module.get<Repository<Book>>(getRepositoryToken(Book));
  });

  it('should simply work', () => {
    // arrange
    const a = 2;
    const b = 2;

    // act
    const result = a + b;

    // assert
    expect(result).toBe(4);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array of books', async () => {
      const books: Book[] = [
        {
          id: 1,
          title: 'asdf',
          author: 'asdf',
          pages: 123,
          price: 123,
          year: 123,
        },
      ];

      jest.spyOn(repository, 'find').mockResolvedValue(books);

      const result = await service.getAll();

      expect(result).toHaveLength(1);
      expect(result[0].title).toBe('asdf');
      expect(result[0].author).toBe('asdf');
      expect(result[0]).toEqual(books[0]);
    });
  });
});
