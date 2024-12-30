import { Resolver, Query, Args } from '@nestjs/graphql'
import { plainToClass } from 'class-transformer'
import { UsersService } from '../services/users.service';
import { User } from '../entities/user.entity';
import { UsersArgs } from '../dto/users.args';
import { CurrentUser } from 'src/auth/decorators/current-user-decorator';
// import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  // Query to get a list of users
  @Query(() => [User])
  async users(@Args() usersArgs: UsersArgs): Promise<User[]> {
    return await this.usersService.getUsers(usersArgs);
  }

  // Query to get the current authenticated user
  @Query(() => User)
  async user(@CurrentUser() user: User): Promise<User> {
    if (!user) {
      throw new Error('User not found');
    }
    return plainToClass(User, user)
  }

  // Uncomment and implement if needed for updates and password changes
  // @Mutation(() => User)
  // async updateUser(@Args('userDto') updateUserDto: UpdateUserDto): Promise<User> {
  //   return await this.usersService.updateUser(updateUserDto);
  // }

  // @Mutation(() => User)
  // async changePassword(@Args('changePasswordDto') changePasswordDto: ChangePasswordDto): Promise<User> {
  //   return await this.usersService.changePassword(changePasswordDto);
  // }
}
