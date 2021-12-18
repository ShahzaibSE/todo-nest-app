import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
// Service
import { TodoService } from './todo.service';
// DTO.
import { CreateTodoDto } from './dto/create-dto.dto';
import { UpdateTodoDto } from './dto/update-dto.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly service: TodoService) {}
  //
  @Get()
  async index() {
    return await this.service.findAll();
  }
  //
  @Get(':id')
  async getTodo(@Param('id') id: string) {
    return await this.service.findOne(id);
  }
  //
  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    return await this.service.create(createTodoDto);
  }
  //
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return await this.service.update(id, updateTodoDto);
  }
  //
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
