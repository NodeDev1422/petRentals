import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
// import { ProductAdminService } from './admin/product-admin-service/product-admin.service';
// import { ProductVendorService } from './vendor/product-admin-service/product-vendor.service';
// import { ProductUserService } from './user/product-admin-service/product-user.service';
import { ProductAdminServiceService } from './admin/product-admin-service/product-admin-service.service';
import { ProductVendorServiceService } from './vendor/product-vendor-service/product-vendor-service.service';
import { ProductUserServiceService } from './user/product-user-service/product-user-service.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
