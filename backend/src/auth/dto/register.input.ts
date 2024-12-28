import { Field, InputType } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'


@InputType()
export class RegisterInput {
  @Field()
  @IsNotEmpty()
  @IsEmail()
  email!: string

  @Field()
  @IsNotEmpty()
  @IsEmail()
  full_name!: string
  
  @Field()
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password!: string
}