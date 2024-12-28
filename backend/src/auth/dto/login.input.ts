import { Field, InputType, registerEnumType } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty, IsString, ValidateIf, IsEnum } from 'class-validator'


export enum LOGIN_TYPE {
  CREDENTIALS = 'credentials',
  TOKEN = 'token'
}
registerEnumType(LOGIN_TYPE, { name: 'LOGIN_TYPE' })

@InputType()
export class LoginInput {
  @Field(() => LOGIN_TYPE)
  @IsEnum(LOGIN_TYPE)
  type?: LOGIN_TYPE

  @Field({ nullable: true })
  @ValidateIf((o) => o.type === LOGIN_TYPE.CREDENTIALS)
  @IsNotEmpty()
  @IsEmail()
  email!: string

  @Field({ nullable: true })
  @ValidateIf((o) => o.type === LOGIN_TYPE.CREDENTIALS)
  @IsNotEmpty()
  @IsString()
  password!: string

  @Field({ nullable: true })
  @ValidateIf((o) => o.type === LOGIN_TYPE.TOKEN)
  @IsNotEmpty()
  @IsString()
  token?: string
}