import { Module, OnModuleInit } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UsersController } from './controllers/users.controller'
import { UsersService } from './services/users.service'
import { UsersSeeder } from './seeds/users.seeder'
import { User } from './entities/user.entity'

@Module({
  imports: [  
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    UsersSeeder
  ],
  exports: [UsersService],
})


export class UsersModule implements OnModuleInit {
  constructor(private readonly seedService: UsersService) {}

  async onModuleInit() {
    //TODO
    await this.seedService.seed()
  }
}
