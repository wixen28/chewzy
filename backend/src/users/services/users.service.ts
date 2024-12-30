import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, Like } from 'typeorm'
import { User } from '../entities/user.entity'
import { UsersArgs } from '../dto/users.args'
import { CreateUserDto } from '../dto/create-user.dto'
import { UpdateUserDto } from '../dto/update-user.dto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // CRUD
  async getUsers(usersArgs: UsersArgs): Promise<User[]> {
    const baseWhere: Record<string, any> = {}

    if (usersArgs.search)
      baseWhere.email = Like(`%${usersArgs.search}%`)

    const users = await this.usersRepository.find(baseWhere)

    return users
  }


  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { email, password, ...rest } = createUserDto

    // Hash password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = this.usersRepository.create({
      ...rest,
      email,
      password: hashedPassword,
    })

    return this.usersRepository.save(user)
  }

  async getUser(id: number): Promise<User | null> {
    return await this.usersRepository.findOneBy({ id })
  }

  
  async getUserByEmail(email: string): Promise<User | null> {
    return await this.usersRepository.findOneBy({ email })
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
    await this.usersRepository.update(id, updateUserDto)

    const updatedUser = await this.usersRepository.findOne({ where: { id } })
    return updatedUser
  }
}
