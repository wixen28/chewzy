import { InputType, Field } from '@nestjs/graphql'
import { IsEmail, IsOptional } from 'class-validator'
import { UserRole } from '../entities/user.entity'

@InputType()
export class UpdateUserDto {
  @Field({ nullable: true })
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsEmail()
  @IsOptional()
  email?: string;

  @Field({ nullable: true })
  @IsOptional()
  password?: string;

  @Field({ nullable: true })
  @IsOptional()
  role?: UserRole;

  @Field({ nullable: true })
  @IsOptional()
  profile_picture?: string;

  @Field({ nullable: true })
  @IsOptional()
  bio?: string;

  @Field({ nullable: true })
  @IsOptional()
  location?: string;
}
