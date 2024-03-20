export type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  pages: number;
  year: number;
};

export type CreateBook = Omit<Book, 'id'>;

export class BooksService {
  private books: Book[] = [];

  generatedId(): number {
    const ids = this.books.map((book) => book.id);
    const highestId = Math.max(...ids);
    return highestId + 1;
  }

  getAll(): Book[] {
    return this.books;
  }

  getOne(id: number): Book {
    return this.books.find((book) => book.id === id);
  }

  create(newBook: CreateBook): Book {
    const id = this.generatedId();
    const book = { id, ...newBook };
    this.books.push(book);
    return book;
  }

  delete(id: number): void {
    const index = this.books.findIndex((book) => book.id === id);
    this.books.splice(index, 1);
  }

  update(id: number, book: Book): Book {
    const index = this.books.findIndex((book) => book.id === id);
    this.books[index] = book;
    return book;
  }
}
