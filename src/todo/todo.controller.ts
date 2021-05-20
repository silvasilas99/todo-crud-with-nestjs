import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { TodoEntify } from './todo.entity';
import { TodoService } from './todo.service';

@Crud({
    model: {
        type: TodoEntify
    }
})

@Controller('todo')
export class TodoController implements CrudController<TodoEntify> {
    constructor(public service: TodoService) {}
}
