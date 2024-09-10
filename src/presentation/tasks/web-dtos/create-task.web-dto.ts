import { IsInt, Min, Max } from 'class-validator';

export class CreateTaskWebDto {
  @IsInt()
  @Min(1)
  @Max(1000)
  public size: number;
}
