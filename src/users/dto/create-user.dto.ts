import {
  IsAlphanumeric,
  IsEmpty,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsAlphanumeric()
  username: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsEmpty()
  address?: string;
}
