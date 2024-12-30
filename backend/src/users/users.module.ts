import { Module, OnModuleInit } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UsersService } from './services/users.service'
import { UsersSeeder } from './seeds/users.seeder'
import { User } from './entities/user.entity'
import { UsersResolver } from './resolvers/users.resolver'

@Module({
  imports: [  
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    UsersService,
    UsersSeeder,
    UsersResolver
  ],
  exports: [UsersService],
})

export class UsersModule implements OnModuleInit {
  constructor(private readonly seedService: UsersSeeder) {}

  async onModuleInit() {
    await this.seedService.seed()
  }
}

