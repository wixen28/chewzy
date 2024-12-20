import { Field, ArgsType } from '@nestjs/graphql'
import { IsOptional, IsString } from 'class-validator'


@ArgsType()
export class UsersArgs {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  search?: string
}