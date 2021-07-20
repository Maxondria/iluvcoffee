import { ArrayNotEmpty, IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  // @ArrayNotEmpty()
  @IsString({ each: true })
  readonly flavors: string[];
}
