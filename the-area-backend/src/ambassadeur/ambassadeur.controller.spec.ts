import { Test, TestingModule } from '@nestjs/testing';
import { AmbassadeurController } from './ambassadeur.controller';

describe('AmbassadeurController', () => {
  let controller: AmbassadeurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AmbassadeurController],
    }).compile();

    controller = module.get<AmbassadeurController>(AmbassadeurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
