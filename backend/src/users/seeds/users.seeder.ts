import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserRole } from '../entities/user.entity'
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
      fullName: 'John Doe', // Ensure camelCase
      email: 'johndoe@example.com',
      password: 'securepassword',
      role: UserRole.ADMIN, // Use the enum, not a plain string
      profilePicture: 'profile.jpg',
      bio: 'Developer and pet lover',
      location: 'New York',
    })

    await this.usersRepository.save(devUser);
  }
}
