import { Test, TestingModule } from '@nestjs/testing';
import { UsersAPIService } from './users.service';

describe('UsersService', () => {
  let service: UsersAPIService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersAPIService],
    }).compile();

    service = module.get<UsersAPIService>(UsersAPIService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
