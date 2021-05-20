import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntify } from './todo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TodoEntify])
  ],
  providers: [TodoService],
  controllers: [TodoController]
})

export class TodoModule {}
