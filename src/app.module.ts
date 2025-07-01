import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModuleTsModule } from './database.module';
import { CategoryModule } from './category/category.module';
import { PetsModule } from './pets/pets.module';


@Module({
  imports: [ProductsModule, UsersModule, OrdersModule,AuthModule, DatabaseModuleTsModule, CategoryModule, PetsModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
