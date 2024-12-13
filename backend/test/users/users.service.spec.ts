import { Test, TestingModule } from '@nestjs/testing'
import { UsersService} from '../../src/users/users.service'
import { UsersResolver } from '../../src/users/users.resolver';
import { UsersModule } from '../../src/users/users.module';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],  // Import the module that contains the service
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
