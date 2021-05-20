import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { TodoEntify } from './todo.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodoService extends TypeOrmCrudService<TodoEntify>{
    constructor(@InjectRepository(TodoEntify) repo) {
        super(repo)
    }
}
