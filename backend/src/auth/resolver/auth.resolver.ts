import { Resolver, Mutation, Args } from '@nestjs/graphql'

import { User } from 'src/users/entities/user.entity'
import { AuthService } from '../services/auth.service'
import { LoginInput } from '../dto/login.input'
import { LoginData } from '../dto/login.data'
// import { RegisterInput } from '../dto/register.input'
// import { ForgotPasswordInput } from '../dto/forgot-password.input'
// import { ForgotPasswordData } from '../dto/forgot-password.data'
// import { ResetPasswordInput } from '../dto/reset-password.input'
// import { ResetPasswordData } from '../dto/reset-password.data'


@Resolver()
export class AuthResolver {

  constructor(
    private readonly authService: AuthService
  ) {}

  
  @Mutation(() => LoginData)
  async login(@Args('loginInput') loginInput: LoginInput): Promise<LoginData> {
    return this.authService.login(loginInput)
  }

  
  // @Mutation(() => User)
  // async register(@Args('registerInput') registerInput: RegisterInput): Promise<User> {
  //   return await this.authService.register(registerInput)
  // }


  // @Mutation(() => ForgotPasswordData)
  // async forgotPassword(@Args('forgotPasswordInput') forgotPasswordInput: ForgotPasswordInput): Promise<ForgotPasswordData> {
  //   return await this.authService.forgotPassword(forgotPasswordInput)
  // }


  // @Mutation(() => ResetPasswordData)
  // async resetPassword(@Args('resetPasswordInput') resetPasswordInput: ResetPasswordInput): Promise<ResetPasswordData> {
  //   return await this.authService.resetPassword(resetPasswordInput)
  // }
 }