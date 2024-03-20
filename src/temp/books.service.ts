export class BooksService {
  private books = [];

  generatedId(): number {
    const ids = books.map((book) => book.id);
    const highestId = Math.max(...ids);
    return highestId + 1;
  }

  getAll() {
    return this.books;
  }

  getOne(id: number) {
    return this.books.find((book) => book.id === id);
  }

  create(newBook) {
    const id = this.generatedId();
    const book = { id, ...newBook };
    this.books.push(book);
    return book;
  }

  delete(id: number): void {
    const index = this.books.findIndex((book) => book.id === id);
    this.books.splice(index, 1);
  }

  update(id: number, book) {
    const index = this.books.findIndex((book) => book.id === id);
    this.books[index] = book;
    return book;
  }
}
