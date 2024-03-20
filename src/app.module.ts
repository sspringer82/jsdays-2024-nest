import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    PersonModule,
    BooksModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          synchronize: true,
          logging: false,
          autoSave: true,
          location: configService.get('DATABASE_LOCATION'),
          autoLoadEntities: true,
          migrations: [],
          subscribers: [],
          type: 'sqljs',
        };
      },
      inject: [ConfigService],
    }),

    AuthModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
