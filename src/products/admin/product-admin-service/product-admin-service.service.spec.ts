import { Test, TestingModule } from '@nestjs/testing';
import { ProductAdminServiceService } from './product-admin-service.service';

describe('ProductAdminServiceService', () => {
  let service: ProductAdminServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductAdminServiceService],
    }).compile();

    service = module.get<ProductAdminServiceService>(ProductAdminServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
