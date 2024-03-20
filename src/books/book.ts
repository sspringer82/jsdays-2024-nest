import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty({
    example: 'My book title',
    description: 'the title of the book',
  })
  @Column()
  title: string;
  @ApiProperty({
    example: 'Me',
    description: 'the author',
  })
  @Column()
  author: string;
  @ApiProperty({
    example: 42.99,
    description: 'the price',
  })
  @Column()
  price: number;
  @ApiProperty({
    example: 450,
    description: 'the amount of paper',
  })
  @Column()
  pages: number;
  @ApiProperty({
    example: 2024,
    description: 'publication year',
  })
  @Column()
  year: number;
}

export type CreateBook = Omit<Book, 'id'>;
