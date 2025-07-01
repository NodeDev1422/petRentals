import { Test, TestingModule } from '@nestjs/testing';
import { ProductUserServiceService } from './product-user-service.service';

describe('ProductUserServiceService', () => {
  let service: ProductUserServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductUserServiceService],
    }).compile();

    service = module.get<ProductUserServiceService>(ProductUserServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
