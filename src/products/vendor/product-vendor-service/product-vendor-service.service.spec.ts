import { Test, TestingModule } from '@nestjs/testing';
import { ProductVendorServiceService } from './product-vendor-service.service';

describe('ProductVendorServiceService', () => {
  let service: ProductVendorServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductVendorServiceService],
    }).compile();

    service = module.get<ProductVendorServiceService>(ProductVendorServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
