import { Test, TestingModule } from '@nestjs/testing';
import { DrugsController } from './drugs.controller';
import { DrugsService } from './drugs.service';

describe('DrugsController', () => {
  let controller: DrugsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DrugsController],
      providers: [
        {
          provide: DrugsService,
          useValue: {
            create: jest.fn(),
            update: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<DrugsController>(DrugsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
