import { Test, TestingModule } from '@nestjs/testing';
import { AmbassadeurService } from './ambassadeur.service';

describe('AmbassadeurService', () => {
  let service: AmbassadeurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmbassadeurService],
    }).compile();

    service = module.get<AmbassadeurService>(AmbassadeurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
