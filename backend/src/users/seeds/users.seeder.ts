import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from '../entities/user.entity';

@Injectable()
export class UsersSeeder {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async seed() {
    const usersCount = await this.usersRepository.count();
    if (usersCount > 0) {
      console.log('Users already exist, skipping seeding.');
      return;
    }

    console.log('Seeding development user...');
    await this.seedDevUser();
    console.log('Development user seeded successfully.');
  }


  private async seedDevUser() {
    const hashedPassword = await bcrypt.hash('28011994', 10);

    const devUser = this.usersRepository.create({
      email: 'dev@chewzy.sk',
      password: hashedPassword,
      full_name: 'Dev User', 
      role: 'admin', 
    });

    await this.usersRepository.save(devUser);
  }
}
