import { Module } from '@nestjs/common'
import { UsersModule } from 'src/users/users.module'
import { AuthService } from './services/auth.service'
import { AuthResolver } from './resolver/auth.resolver'
import { JwtModule } from '@nestjs/jwt'
import { getJwtSecret } from './utils/auth.utils'

// TODO MAILER FOR FORGOT AND RESET PASSWORD
// import { MailerModule } from 'src/mailer/mailer.module'
import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: getJwtSecret(),
      signOptions: { expiresIn: '7 days' },
    }),
    // MailerModule
  ],
  providers: [AuthService, AuthResolver, JwtStrategy],
  exports: [JwtStrategy, JwtModule],
})

export class AuthModule {}
