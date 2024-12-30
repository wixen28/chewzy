import { Field, ObjectType, PartialType, OmitType } from '@nestjs/graphql'

import { User } from 'src/users/entities/user.entity'

@ObjectType()

class UserLoginData extends PartialType(
  
  OmitType(User, ['password', 'createdAt', 'updatedAt' ] as const),
  
) {}

@ObjectType()
export class LoginData {
  @Field({ nullable: true })
  accessToken?: string

  @Field(() => UserLoginData, { nullable: true })
  user?: UserLoginData
}
