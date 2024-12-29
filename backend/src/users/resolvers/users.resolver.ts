import { UseGuards } from '@nestjs/common'
import { Resolver, Mutation, Query, Args, ResolveField, Parent } from '@nestjs/graphql'
import { plainToClass } from 'class-transformer'
import { CurrentUser } from 'src/auth/decorators/current-user-decorator'
// import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'
import { UsersService } from '../services/users.service'
// import { CommunityMembership } from 'src/community-memberships/models/community-membership.model'
import { UsersArgs } from '../dto/users.args'
import { User } from '../entities/user.entity'
import { UpdateUserDto } from '../dto/update-user.dto'
// import { ChangePasswordDto } from '../dto/change-password.dto'


// @UseGuards(JwtAuthGuard)
@Resolver(() => User)
export class UsersResolver {

  constructor(
    private readonly usersService: UsersService
  ) {}


  // CRUD
  @Query(() => [User])
  async users(@Args() usersArgs: UsersArgs): Promise<User[]> {
    return await this.usersService.getUsers(usersArgs)
  }


  @Query(() => User)
  async user(@CurrentUser() user: User): Promise<User> {
    return plainToClass(User, user)
  }


  // @Mutation(() => User)
  // async updateUser(@Args('userDto') updateUserDto: UpdateUserDto): Promise<User> {
  //   return await this.usersService.updateUser(updateUserDto)
  // }


  // @Mutation(() => User)
  // async changePassword(@Args('changePasswordDto') changePasswordDto: ChangePasswordDto): Promise<User> {
  //   return await this.usersService.changePassword(changePasswordDto)
  // }
  
}