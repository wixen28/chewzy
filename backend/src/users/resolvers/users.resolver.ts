import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello from GraphQL!'
  }
}