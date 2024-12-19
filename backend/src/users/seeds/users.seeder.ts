import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import * as bcrypt from 'bcrypt'

import { User } from '../entities/user.entity'

@Injectable()
export class UsersSeeder {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async seed() {
    // Check if users already exist to avoid duplicates
    const usersCount = await this.usersRepository.count()
    if (usersCount > 0) {
      console.log('Users already exist, skipping seeding.')
      return

    }

    await this.seedDevUser()
  }

    // Create sample users
  //   const users = [
  //     {
  //       name: 'John Doe',
  //       email: 'john.doe@example.com',
  //       password: await bcrypt.hash('password123', 10),
  //       role: 'admin',
  //       profile_picture: 'https://via.placeholder.com/150',
  //       bio: 'This is a bio for John Doe.',
  //       location: 'New York',
  //     },
  //     {
  //       name: 'Jane Smith',
  //       email: 'jane.smith@example.com',
  //       password: await bcrypt.hash('password123', 10),
  //       role: 'user',
  //       profile_picture: 'https://via.placeholder.com/150',
  //       bio: 'This is a bio for Jane Smith.',
  //       location: 'Los Angeles',
  //     },
  //   ];

  //   // Save users to the database
  //   await this.usersRepository.save(users);
  //   console.log('Users seeded successfully!');
  // }

  private async seedDevUser() {
    const hashedPassword = await bcrypt.hash('28011994', 10)
    const devUser = this.usersRepository.create({
      email: 'dev@chewzy.sk',
      password: hashedPassword
    })

    await this.usersRepository.save(devUser)
  }
}
