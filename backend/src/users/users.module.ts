import { Module, OnModuleInit } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UsersService } from './services/users.service'
import { UsersSeeder } from './seeds/users.seeder'
import { User } from './entities/user.entity'

@Module({
  imports: [  
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    UsersService,
    UsersSeeder
  ],
  exports: [UsersService],
})

export class UsersModule implements OnModuleInit {
  constructor(private readonly seedService: UsersSeeder) {}

  async onModuleInit() {
    await this.seedService.seed()
  }
}

