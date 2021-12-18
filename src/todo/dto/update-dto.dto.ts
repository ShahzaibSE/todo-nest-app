import { BaseTodoDto } from './base-dto.dto';

export class UpdateTodoDto extends BaseTodoDto {
  completedAt: Date;
}
