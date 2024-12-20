import { Test, TestingModule } from '@nestjs/testing'
import { UsersService} from '../../src/users/users.service'
import { UsersResolver } from '../../src/users/resolvers/users.resolver'
import { UsersModule } from '../../src/users/users.module'

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
    }).compile()

    service = module.get<UsersService>(UsersService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
