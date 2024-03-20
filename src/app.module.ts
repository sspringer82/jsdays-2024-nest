import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PersonModule,
    BooksModule,
    TypeOrmModule.forRoot({
      synchronize: true,
      logging: false,
      autoSave: true,
      location: 'database.sqlite',
      autoLoadEntities: true,
      migrations: [],
      subscribers: [],
      type: 'sqljs',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
