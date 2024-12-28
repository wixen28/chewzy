import { Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
// import { TokenExpiredError, JsonWebTokenError } from 'jsonwebtoken'

// import { MailerService } from 'src/mailer/services/mailer.service'
import { UsersService } from 'src/users/services/users.service'
import { User } from 'src/users/entities/user.entity'
import { LOGIN_TYPE, LoginInput } from '../dto/login.input'
import { LoginData } from '../dto/login.data'
// import { RegisterInput } from '../dto/register.input'
// import { ForgotPasswordInput } from '../dto/forgot-password.input'
// import { ForgotPasswordData } from '../dto/forgot-password.data'
// import { ResetPasswordInput } from '../dto/reset-password.input'
// import { ResetPasswordData } from '../dto/reset-password.data'
// import { SendEmailInput } from 'src/mailer/dto/send-email.input'
import { getJwtSecret } from '../utils/auth.utils'


@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    // private readonly mailerService: MailerService,
    private readonly usersService: UsersService
  ) {}


  async login(loginInput: LoginInput): Promise<LoginData> {
    switch (loginInput.type) {
      case LOGIN_TYPE.CREDENTIALS:
        return await this._loginByCredentials(loginInput)
      case LOGIN_TYPE.TOKEN:
        return await this._loginByToken(loginInput)
      default:
        throw new UnauthorizedException('Invalid login type.') 
    }
  }


  // async register(registerInput: RegisterInput): Promise<User> {
  //   return await this.usersService.createUser(registerInput)
  // }


  // async forgotPassword(forgotPasswordInput: ForgotPasswordInput): Promise<ForgotPasswordData> {
  //   const user = await this.usersService.getUserByEmail(forgotPasswordInput.email)
  //   if (!user)
  //     throw new NotFoundException('Používateľ so zadaným e-mailom neexistuje.')

  //   const token = jwt.sign({ id: user.id }, getJwtSecret(), { expiresIn: '1h' })
  //   const frontedUrl = this.configService.get('FRONTEND_URL') || 'http://localhost:5173'
  //   const resetLink = `${frontedUrl}/resetovanie-hesla?token=${token}`
  //   const mailOptions: SendEmailInput = {
  //     to: user.email,
  //     subject: 'Spoločenstvá - Resetovanie hesla',
  //     html: `
  //       <h2>Spoločenstvá - Resetovanie hesla</h2>
  //       </br>
  //       <p>Ak si želáte resetovať Vaše heslo, kliknite na link uvedený nižšie.</p>
  //       </br>
  //       <a href="${resetLink}">Chcem resetovať heslo</a>
  //       </br>
  //     `,
  //     successMessage: 'Link na resetovanie hesla Vám bol zaslaný na Váš email.',
  //     errorMessage: 'Niečo sa pokazilo. Skúste to znova prosím.'
  //   }

  //   const mailerResponse = await this.mailerService.sendEmail(mailOptions)
  //   if (mailerResponse.error)
  //     throw new InternalServerErrorException(mailerResponse.error)

  //   return mailerResponse
  // }


  // async resetPassword(resetPasswordInput: ResetPasswordInput): Promise<ResetPasswordData> {
  //   try {
  //     const decoded = jwt.verify(resetPasswordInput.token, getJwtSecret())
  //     const userId = typeof decoded != 'string' ? decoded.id : decoded

  //     const user = await this.usersService.getUser(userId)
  //     if (!user)
  //       throw new NotFoundException('User with provided ID not found.')

  //     return await this.usersService.resetPassword({ userId: user.id, newPassword: resetPasswordInput.newPassword, newPasswordAgain: resetPasswordInput.newPasswordAgain })
  //   } catch (error) {
  //     throw new InternalServerErrorException(error)
  //   }
  // }


  private async _loginByCredentials(loginInput: LoginInput): Promise<LoginData> {
    const user = await this._validateUser(loginInput)
    if (!user)
      throw new Error('Nesprávne prihlasovacie údaje')

    const payload = {
      email: user.email,
      sub: user.id
    }

    const accessToken = this.jwtService.sign(payload)
    return { accessToken, user }
  }


  private async _loginByToken(loginInput: LoginInput): Promise<LoginData> {
    const user = await this._validateToken(loginInput)

    if (!user) {
      throw new UnauthorizedException('Invalid token.')
    }

    return { accessToken: loginInput.token, user }
  }


  private async _validateUser(loginInput: LoginInput): Promise<User | null> {
    const user = await this.usersService.getUserByEmail(loginInput.email)
    if (!user)
      return null

    const match = await bcrypt.compare(loginInput.password, user.password)
    if (!match)
      return null

    return user
  }  
  

  private async _validateToken(loginInput: LoginInput): Promise<User | null> {
    if (!loginInput.token) {
      throw new UnauthorizedException('Token is missing. Please login again.')
    }

    try {
      const decoded = jwt.verify(loginInput.token, getJwtSecret())
      const userId = typeof decoded != 'string' ? decoded.id : decoded
      const user = await this.usersService.getUser(userId)
      if (!user)
        throw new UnauthorizedException('Authentication failed due to an unknown error.')

      return user
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError)
        throw new UnauthorizedException('Token has expired. Please login again.')
      else if (error instanceof jwt.JsonWebTokenError)
        throw new UnauthorizedException('Invalid token. Authentication failed.')
      else 
        throw new UnauthorizedException('Authentication failed due to an unknown error.')
    }
  }
}