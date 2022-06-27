import { ApiProperty } from '@nestjs/swagger';

export class TaskDTO {
  @ApiProperty()
  description: string;

  @ApiProperty()
  completed: boolean;

  @ApiProperty()
  id: string;
}
