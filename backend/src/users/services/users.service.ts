import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import * as bcrypt from 'bcrypt'; // To hash passwords

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { email, password, ...rest } = createUserDto;

    // Hash password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = this.usersRepository.create({
      ...rest,
      email,
      password: hashedPassword,
    });

    return this.usersRepository.save(user);
  }

  // Fixing the return type to match with 'User | null'
  async findUserByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { email } });
  }

  // Fixing the return type and handling 'null' value appropriately
  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
    await this.usersRepository.update(id, updateUserDto);

    const updatedUser = await this.usersRepository.findOne({ where: { id } });
    return updatedUser;  // This can be 'null' if no user is found
  }

  // Add other necessary methods (e.g., findById, delete, etc.)
}
